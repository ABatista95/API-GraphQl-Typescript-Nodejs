import { DataSource } from 'typeorm'
import { DB_CONNECTION, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../config'

/* Impor Entities */
import { Users } from '../Entities/userEntities'

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [Users],
    synchronize: false,
    ssl: false,
})
