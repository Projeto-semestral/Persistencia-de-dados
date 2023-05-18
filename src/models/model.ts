import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Livro {

    @PrimaryGeneratedColumn()
    numero_registro: number

    @Column()
    titulo: string

    @Column()
    assunto: string

    @Column()
    autor:string

    @Column()
    data:string
}