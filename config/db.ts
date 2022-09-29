import { DataSource } from "typeorm";
import config from "./config";

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = config;

const appDataSource = new DataSource({
	type: "mysql",
	connectorPackage: "mysql2",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USER,
	password: DB_PASS,
	database: DB_NAME,
	synchronize: false,
	logging: "all",
	entities: ["./build/app/entity/*.js"],
	migrations: ["./build/app/migrations/*.js"],
	migrationsRun: true,
});

appDataSource
	.initialize()
	.then((_res) => { })
	.catch((_error) => { console.log(_error) });

export default appDataSource;
