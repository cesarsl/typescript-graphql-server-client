import { Arg, Int, Query, Mutation, Resolver } from "type-graphql";
import { DatabaseUserModel } from "../entity/User";
import { UserInput, PartialUpdateUserInput } from "../entity/UserInput";

@Resolver((of) => DatabaseUserModel)
export default class {
  @Mutation((type) => Boolean)
  async createUser(@Arg("payload") { nome, email, cpf }: UserInput) {
    await DatabaseUserModel.insert({nome, email, cpf});
    return true;
  }

  @Mutation((type) => Boolean)
  async updateUser(
    @Arg("id", (type) => Int) id: number,
    @Arg("payload", (type) => PartialUpdateUserInput) payload: PartialUpdateUserInput
  ) {
    await DatabaseUserModel.update({id}, {...payload});
    return true;
  }

  @Mutation((type) => Boolean)
  async deleteUser(@Arg("id", (type) => Int) id: number) {
    await DatabaseUserModel.delete(id);
    return true;
  }

  @Query((type) => [DatabaseUserModel], { nullable: true })
  getUsers(
    @Arg("id", (type) => Int, { nullable: true }) id: number,
    @Arg("nome", (type) => String, { nullable: true }) nome: string,
    @Arg("email", (type) => String, { nullable: true }) email: string,
    @Arg("cpf", (type) => String, { nullable: true }) cpf: string
  ) {
    if (!id && !nome && !email && !cpf) {
      return DatabaseUserModel.find();
    } else {
      let searchParameters: any = {
        id: id,
        nome: nome,
        email: email,
        cpf: cpf,
      };
      let query: any = {};
      Object.keys(searchParameters).forEach((key) => {
        if (searchParameters[key]) {
          query[key] = searchParameters[key];
        }
      });
      return DatabaseUserModel.find({ where: query });
    }
  }
}
