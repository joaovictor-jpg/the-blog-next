import { postRepository } from "@/repository/post";

export async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div>
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
