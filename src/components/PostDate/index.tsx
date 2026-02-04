import { formatDateTime, formatRelativeDate } from "@/util/format-datetime";

type PostDateProps = {
  date: string;
};

export function PostDate({ date }: Readonly<PostDateProps>) {
  return (
    <time
      className="text-slate-600 text-sm"
      dateTime={date}
      title={formatDateTime(date)}
    >
      {formatRelativeDate(date)}
    </time>
  );
}
