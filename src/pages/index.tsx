import Layout from "@/layout/Layout";
import PostsTab from "@/components/PostsTabs";
import CreatePostIdea from "@/forms/CreatePostIdea";
import Post from "@/interfaces/post";
import services from "@/services";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

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
