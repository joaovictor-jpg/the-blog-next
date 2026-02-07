import "reflect-metadata";
import { PostModel } from "@/models/post/Post-Model";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/database.sqlite",
  migrations: [__dirname + "./src/db/migration/**/*{.js,.ts}"],
  synchronize: false,
  logging: true,
  entities: [PostModel],
  migrationsRun: false,
  migrationsTableName: "migrations",
  migrationsTransactionMode: "all",
});
