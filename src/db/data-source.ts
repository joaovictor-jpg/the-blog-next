import "reflect-metadata";
import { PostModel } from "@/models/post/Post-Model";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/db/database.sqlite",
  synchronize: true,
  logging: true,
  entities: [PostModel],
});
