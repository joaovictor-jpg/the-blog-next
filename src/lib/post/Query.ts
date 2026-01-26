import { postRepository } from "@/repository/post";
import { cache } from "react";

export const findAllPublicPost = cache(
  async () => await postRepository.findAllPublic(),
);
