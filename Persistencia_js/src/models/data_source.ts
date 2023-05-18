import "reflect-metadata"
import { DataSource } from "typeorm"
import { Livro } from "./model"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1979",
    database: "biblioteca",
    synchronize: true,
    logging: false,
    entities: [Livro],
    migrations: [],
    subscribers: [],
})




