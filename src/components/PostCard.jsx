import { FaHeart } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import VerticalOptions from "./VerticalOptions";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const [liked, setLiked] = useState(false);

  const handleReactions = () => {
    if (!liked) {
      setLiked(true);
      post.reactions.likes += 1;
    } else {
      post.reactions.likes -= 1;
      setLiked(false);
    }
  };

  const handleOnClickOption = () => {
    setIsPinned(!isPinned);
  };
  const shouldShow = isPinned || showOptions;

  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <div className="dropdown">
          {" "}
          <a
            href="#"
            className="d-flex align-items-center text-black text-decoration-none  "
            aria-expanded="false"
          >
            {" "}
            <img
              alt=""
              width="24"
              height="24"
              className="rounded-circle me-2"
              // src={post.userId}
            />
            {post.userId}
          </a>
          <SlOptionsVertical
            className="options"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
            onClick={() => handleOnClickOption()}
          />
        </div>
        {shouldShow && (
          <div
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
            className="Vertical-options"
          >
            <VerticalOptions postId={post.id} />
          </div>
        )}

        <div className="card-text title">{post.title}</div>
        <div className="card-text">{post.body}</div>

        <div className="card-text tags">
          {post.tags.map((item) => (
            <span key={item} className="badge text-bg-primary">
              {item}
            </span>
          ))}
        </div>
        <hr />
        <div className="reactions">
          <FaHeart
            className={`like-btn ${liked ? "liked" : ""}`}
            onClick={() => handleReactions()}
          />
          {post.reactions.likes}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
