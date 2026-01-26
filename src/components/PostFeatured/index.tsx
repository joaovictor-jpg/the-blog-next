import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qualquer";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        imageProps={{
          src: "/images/bryen_9.png",
          width: 1200,
          height: 720,
          alt: "Titulo do post",
          priority: true,
        }}
        linkProps={{
          href: postLink,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="text-slate-600 text-sm" dateTime="2026/01/18">
          18/01/2026 - 16:07
        </time>

        <PostHeading url={postLink} as="h1">
          optio eos ad cumque voluptatum
        </PostHeading>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sunt
          nam possimus provident cum alias ratione, eum pariatur reprehenderit
          quod deleniti error optio eos ad cumque voluptatum architecto sapiente
          maxime!
        </p>
      </div>
    </section>
  );
}
