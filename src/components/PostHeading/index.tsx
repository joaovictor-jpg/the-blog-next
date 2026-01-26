import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function PostHeading({
  children,
  url,
  as: Tag = "h2",
}: Readonly<PostHeadingProps>) {
  const headingClassesMap = {
    h1: "text-4xl/tight sm:text-6xl font-extrabold",
    h2: "text-2xl/tight font-bold",
    h3: "text-2xl/tight font-bold",
    h4: "text-2xl/tight font-bold",
    h5: "text-2xl/tight font-bold",
    h6: "text-2xl/tight font-bold",
  };

  return (
    <Tag className={`${headingClassesMap[Tag]}`}>
      <Link className="group-hover:text-slate-600 transition" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
