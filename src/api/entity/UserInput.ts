import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  @Length(1, 42)
  nome: string;

  @Field()
  @IsEmail()
  @Length(1, 42)
  email: string;

  @Field()
  @Length(9, 9)
  cpf: string;
}
