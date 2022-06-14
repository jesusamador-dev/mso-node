import { DataSource } from "typeorm";
import config from "./config";

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = config;

const appDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  logging: true,
  entities: ['./app/entity/*.js']
});

appDataSource.initialize().then((_res) => {
  // here you can start to work with your database
})
.catch((error) => console.log(error));

export default appDataSource;