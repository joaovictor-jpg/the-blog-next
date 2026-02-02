import { findBySlugCach } from "@/lib/post/Query";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};
export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;
  let post = await findBySlugCach(slug);
  return <h1>Página dinámica: {post.title}</h1>;
}
