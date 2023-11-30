import Layout from "@/components/layout/Layout";
import PostsTab from "@/features/posts/components/PostsTabs";
import CreatePostIdea from "@/features/posts/forms/CreatePostIdea";
import IPost from "@/features/posts/post.interface";
import services from "@/services";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    services.http.get("posts").then((response: any) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Layout>
        <p>loading...</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-4">
        <CreatePostIdea />
        <PostsTab posts={posts} />
      </div>
    </Layout>
  );
}
