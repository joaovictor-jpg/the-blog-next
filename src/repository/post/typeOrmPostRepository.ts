import { AppDataSource } from "@/db/data-source";
import { PostModel } from "@/models/post/Post-Model";
import { notFound } from "next/navigation";
import { PostRepository } from "./PostRepository";

export class TypeOrmPostRepository implements PostRepository {
  private async getRepo() {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
    return AppDataSource.getRepository(PostModel);
  }

  async findAllPublic(): Promise<PostModel[]> {
    const repo = await this.getRepo();
    return await repo.find({
      where: {
        published: true,
      },
    });
  }
  async findById(id: string): Promise<PostModel> {
    const repo = await this.getRepo();
    const post = await repo.findOneBy({ id });
    if (!post) throw notFound();
    return post;
  }
  async findBySlug(slug: string): Promise<PostModel> {
    const repo = await this.getRepo();
    const postSlug = await repo.findOneBy({ slug });
    if (!postSlug) throw notFound();
    return postSlug;
  }
}
