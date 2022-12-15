import { Entity, BaseEntity, PrimaryColumn, Column } from 'typeorm'

@Entity()
export class Users extends BaseEntity {
    @PrimaryColumn()
    user_id: string

    @Column()
    name: string

    @Column()
    surnames: string

    @Column()
    user_rol: string

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    gender: string

    @Column()
    image_url: string

    @Column()
    country: string

    @Column()
    city: string

    @Column()
    address: string

    @Column()
    phone_number: string
}