import { PostModel } from "@/models/post/Post-Model";
import { readFile } from "node:fs/promises";
import { PostRepository } from "./PostRepository";

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = ROOT_DIR + "/src/db/seed/posts.json";

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, "utf-8");
    const parseJson = JSON.parse(jsonContent);
    const { posts } = parseJson;
    return posts;
  }

  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published);
  }

  async findById(id: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.id === id && post);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
  async findBySlug(slug: string): Promise<PostModel> {
    const posts = await this.readFromDisk();
    const post = posts.find((post) => post.slug === slug && post);
    if (!post) throw new Error("Post não encontrado");
    return post;
  }
}
