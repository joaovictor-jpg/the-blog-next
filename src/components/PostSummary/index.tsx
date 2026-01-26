import { formatDateTime, formatRelativeDate } from "@/util/format-datetime";
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
      <time
        className="text-slate-600 text-sm"
        dateTime={createdAt}
        title={formatDateTime(createdAt)}
      >
        {formatRelativeDate(createdAt)}
      </time>

      <PostHeading url={postLink} as={postHeading}>
        {postTitle}
      </PostHeading>

      <p>{postExcertp}</p>
    </div>
  );
}
