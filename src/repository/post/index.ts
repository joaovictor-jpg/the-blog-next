import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./PostRepository";

export const postRepository: PostRepository = new JsonPostRepository();
