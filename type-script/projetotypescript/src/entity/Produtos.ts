import { Column, CreateDateColumn, Double, Entity,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    data_criacao: Date

    @UpdateDateColumn()
    data_atualizaca: Date
}