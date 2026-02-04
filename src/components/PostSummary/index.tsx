import { PostDate } from "../PostDate";
import { PostHeading } from "../PostHeading";

type PostSumaryProps = {
  postHeading: "h1" | "h2";
  createdAt: string;
  postLink: string;
  postTitle: string;
  postExcertp: string;
};

export function PostSummary({
  postHeading,
  createdAt,
  postLink,
  postTitle,
  postExcertp,
}: Readonly<PostSumaryProps>) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <PostDate date={createdAt} />

      <PostHeading url={postLink} as={postHeading}>
        {postTitle}
      </PostHeading>

      <p>{postExcertp}</p>
    </div>
  );
}
