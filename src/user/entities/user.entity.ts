import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name:'userdeatil'})
export class User {

@PrimaryGeneratedColumn()
id: number;

@Column()
firstName: string;

@Column()
lastName: string;


@Column()
age: number;

}
