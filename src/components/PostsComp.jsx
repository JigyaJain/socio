import PostCard from "./PostCard.jsx";
import { useContext, useEffect } from "react";
import { PostList } from "../store/post-list-store.jsx";
// import RefreshData from "./RefreshData.jsx";

const PostsComp = () => {
  const { postQueue, fetchPosts } = useContext(PostList);

  useEffect(() => {
    if (postQueue.length === 0) {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          fetchPosts(data.posts);
        });
    }
  }, []);

  return (
    <>
      {/* {postQueue.length === 0 && <RefreshData />} */}
      {postQueue.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsComp;
