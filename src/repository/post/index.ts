import { PostRepository } from "./PostRepository";
import { TypeOrmPostRepository } from "./typeOrmPostRepository";

export const postRepository: PostRepository = new TypeOrmPostRepository();
