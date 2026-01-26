import { findAllPublicPost } from "@/lib/post/Query";
import { PostCoverImage } from "../PostCoverImage";
import { PostSummary } from "../PostSummary";

export async function PostList() {
  const posts = await findAllPublicPost();
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.slice(1).map((post) => {
        const postlink = `/post/${post.slug}`;
        return (
          <div key={post.id} className="flex flex-col gap-4 group">
            <PostCoverImage
              imageProps={{
                src: post.coverImageUrl,
                width: 1200,
                height: 720,
                alt: post.title,
              }}
              linkProps={{
                href: postlink,
              }}
            />
            <PostSummary
              key={post.id}
              postHeading="h2"
              createdAt={post.createdAt}
              postExcertp={post.excerpt}
              postLink={postlink}
              postTitle={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
