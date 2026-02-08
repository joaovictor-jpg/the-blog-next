import { postRepository } from "@/repository/post";
import { notFound } from "next/navigation";
import { cache } from "react";

export const findAllPublicPostCach = cache(
  async () => await postRepository.findAllPublic(),
);

export const findBySlugCach = cache(async (slug: string) => {
  const post = await postRepository
    .findBySlugPublic(slug)
    .catch(() => undefined);

  if (!post) notFound();

  return post;
});

export const findByIdCach = cache(
  async (Id: string) => await postRepository.findById(Id),
);
