import { PostModel } from "@/models/post/Post-Model";
import { readFile } from "node:fs/promises";
import { PostRepository } from "./PostRepository";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = ROOT_DIR + "/src/db/seed/posts.json";

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parseJson = JSON.parse(jsonContent);
    const { posts } = parseJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id && post);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
}

export const postRepository: PostRepository = new JsonPostRepository();
