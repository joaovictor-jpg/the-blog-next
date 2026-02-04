import { PostFeatured } from "@/components/PostFeatured";
import { PostList } from "@/components/PostList/PostList";
import { SpinLoader } from "@/components/SpinLoader/undex";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<SpinLoader continerClasse="min-h-20 mb-16" />}>
      <PostFeatured />
      <PostList />
    </Suspense>
  );
}
