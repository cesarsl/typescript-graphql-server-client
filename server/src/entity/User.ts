import { IsEmail, Length } from "class-validator";
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export class DatabaseUserModel extends BaseEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Length(1, 42)
  @Column()
  nome: string;

  @Field()
  @IsEmail()
  @Length(1, 42)
  @Column()
  email: string;

  @Field()
  @Length(9, 9)
  @Column()
  cpf: string;
}
