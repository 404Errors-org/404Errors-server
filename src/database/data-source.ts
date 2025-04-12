import "./../utils/dotenv.config";
import {DataSource, DataSourceOptions} from "typeorm";
import {User} from "../users/users.entity";
import {Token} from "../tokens/tokens.entity";
import {DatabaseFile} from "../files/files.entity";
import { join } from 'path';

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    username: process.env.PGUSER,
    password: String(process.env.PGPASSWORD),
    database: process.env.PGDATABASE,
    entities: [User, Token, DatabaseFile],
    synchronize: false,
    migrations: [join(__dirname, 'migrations/*.{js,ts}')],
    logging: true,
    ssl: {
        rejectUnauthorized: false,
    }
}

console.log("POSTGRES HOST: ", dataSourceOptions.host);

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;