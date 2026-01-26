import { findAllPublicPost } from "@/lib/post/Query";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function PostFeatured() {
  const posts = await findAllPublicPost();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          src: post.coverImageUrl,
          width: 1200,
          height: 720,
          alt: post.title,
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      />
      <PostSummary
        postHeading={"h1"}
        createdAt={post.createdAt}
        postLink={postLink}
        postTitle={post.title}
        postExcertp={post.excerpt}
      />
    </section>
  );
}
