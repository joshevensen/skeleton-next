import services from "@/services";
import IPost from "../post.interface";
import { PostStatus } from "@prisma/client";
import LibTabs, { ITabItem } from "@/components/library/Tabs";
import PostsList from "./PostsList";

type props = {
  posts: IPost[];
};

const PostsTab: React.FC<props> = ({ posts }) => {
  const statuses = services.enum.toArray(PostStatus);
  const statusTabs: ITabItem[] = [];

  statuses.forEach((status) => {
    const statusPosts = posts.filter(
      (post: IPost) => post.status === status.id
    );

    statusTabs.push({
      label: status.label,
      id: status.id,
      component: <PostsList posts={statusPosts} />,
    });
  });

  return <LibTabs tabs={statusTabs} />;
};

export default PostsTab;
