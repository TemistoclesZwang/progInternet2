import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
require('dotenv').config();



console.log('Nome banco',process.env.DB_USERNAME)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: ["src/**/migration/*.{js,ts}"],
  });
  
  AppDataSource.initialize()
    .then(() => console.log("Database UP - OK"))
    .catch(console.error);