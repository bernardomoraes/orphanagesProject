import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm' // Necessário para utilizar os decorators
import Image from './Image'

@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' }) // Não obrigatório, caso não colocar seria utilizado orphanageId
    // Primeiro Parâmetro: Função que indica o tipo do Retorno.
    // Segundo Parâmetro: Dado uma imagem que eu recebi qual o campo que retorna o relacionamento inverso.
    // Terceiro parâmetro.
    images: Image[]
}