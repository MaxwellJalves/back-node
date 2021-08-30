import { Column, Double, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produtos{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    quantidade: number

    @Column()
    preco:  string

}