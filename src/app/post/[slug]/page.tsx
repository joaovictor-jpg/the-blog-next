import { SinglePost } from "@/components/singlePost";
import { SpinLoader } from "@/components/SpinLoader/undex";
import { findBySlugCach } from "@/lib/post/Query";
import { Metadata } from "next";
import { Suspense } from "react";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetaData({
  params,
}: PostSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  let post = await findBySlugCach(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({
  params,
}: Readonly<PostSlugPageProps>) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoader continerClasse="min-h-20 mb-16" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
