import PostCard from "./PostCard.jsx";
import { useContext } from "react";
import { PostList } from "../store/post-list-store.jsx";

const PostsComp = ({ fetchPostsData }) => {
  const { postQueue, fetchPosts } = useContext(PostList);

  postQueue.length === 0 && fetchPostsData(fetchPosts);
  return (
    <>
      {postQueue.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsComp;
