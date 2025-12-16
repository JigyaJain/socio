import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { PostList } from "../store/post-list-store.jsx";

const VerticalOptions = ({ postId }) => {
  const { clearPosts } = useContext(PostList);

  return (
    <div>
      <button
        className="Vertical-option-btn"
        onClick={() => clearPosts(postId)}
      >
        Delete Post <TiDelete />
      </button>
    </div>
  );
};

export default VerticalOptions;
