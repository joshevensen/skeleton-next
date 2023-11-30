import IPost from "../post.interface";

type props = {
  posts: IPost[];
};

const PostsList: React.FC<props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
        </div>
      ))}
    </>
  );
};

export default PostsList;
