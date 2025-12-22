import PostCard from "./PostCard.jsx";
import { useContext } from "react";
import { PostList } from "../store/post-list-store.jsx";
import RefreshData from "./RefreshData.jsx";

const PostsComp = () => {
  const { postQueue, fetching } = useContext(PostList);

  return (
    <>
      {fetching && <RefreshData />}
      {!fetching &&
        postQueue.map((post) => <PostCard key={post.id} post={post} />)}
    </>
  );
};

export default PostsComp;
