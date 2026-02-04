import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdown = {
  markdown: string;
};

export function SafeMarkdown({ markdown }: Readonly<SafeMarkdown>) {
  return (
    <div className="prose prose-slate w-full max-w-none overflow-hidden prose-a:transition prose-a:no-underline' prose-a:text-blue-500 prose-a:hover:text-blue-700 prose-a:hover:underline prose-img:mx-auto lg:prose-lg">
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
