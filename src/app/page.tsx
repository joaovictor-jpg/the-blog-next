import { PostFeatured } from "@/components/PostFeatured";
import { PostList } from "@/components/PostList/PostList";
import { SpinLoader } from "@/components/SpinLoader/undex";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <PostFeatured />

      <Suspense fallback={<SpinLoader />}>
        <PostList />
      </Suspense>
    </>
  );
}
