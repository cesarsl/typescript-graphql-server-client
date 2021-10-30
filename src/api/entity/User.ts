import { IsEmail, IsNumber, Length } from "class-validator";
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity()
export default class extends BaseEntity {
    @Field(type => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Length(1,42)
    @Column()
    nome: string;

    @Field()
    @IsEmail()
    @Length(1,42)
    @Column()
    email: string;

    @Field(type => Int)
    @IsNumber()
    @Length(9,9)
    @Column()
    cpf: number;
}