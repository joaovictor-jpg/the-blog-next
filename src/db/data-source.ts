import "reflect-metadata";
import "dotenv/config";
import { PostModel } from "../models/post/Post-Model";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [__dirname + "/migrations/**/*{.js,.ts}"],
  synchronize: false,
  logging: true,
  entities: [PostModel],
  migrationsRun: false,
  migrationsTableName: "migrations",
  migrationsTransactionMode: "all",
  subscribers: [],
});
