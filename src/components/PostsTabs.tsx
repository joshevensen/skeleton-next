import Post from "../types/post";
import { PostStatus } from "@prisma/client";
import LibTabs, { ITabItem } from "@/library/components/Tabs";
import PostsList from "./PostsList";
import utils from "@/library/utils";

type props = {
  posts: Post[];
};

const PostsTab: React.FC<props> = ({ posts }) => {
  const statuses = utils.convertTo.enumArray(PostStatus);
  const statusTabs: ITabItem[] = [];

  statuses.forEach((status) => {
    const statusPosts = posts.filter((post: Post) => post.status === status.id);

    statusTabs.push({
      label: status.label,
      id: status.id,
      component: <PostsList posts={statusPosts} />,
    });
  });

  return <LibTabs tabs={statusTabs} />;
};

export default PostsTab;
