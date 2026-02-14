"use cache";
import { CachedPostResponse } from "@/models/DTOs/Post-Dtos-response";
import { postRepository } from "@/repository/post";
import { cache } from "react";

export const findAllPublicPostCach = cache(
  async (): Promise<CachedPostResponse[]> => {
    const posts = await postRepository.findAllPublic();
    return posts.map((post) => post.toPostCache());
  },
);

export const findBySlugCach = cache(
  async (slug: string): Promise<CachedPostResponse | null> => {
    const post = await postRepository
      .findBySlugPublic(slug)
      .catch(() => undefined);

    if (!post) return null;

    return post.toPostCache();
  },
);

export const findByIdCach = cache(
  async (id: string): Promise<CachedPostResponse | null> => {
    const post = await postRepository.findById(id).catch(() => null);
    if (!post) return null;
    return post.toPostCache();
  },
);
