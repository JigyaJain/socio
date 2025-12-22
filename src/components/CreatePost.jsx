import { PostList } from "../store/post-list-store.jsx";
import { useContext, useRef } from "react";

const CreatePost = () => {
  const userIdRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();

  const { postQueue, addPosts } = useContext(PostList);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const entrId = userIdRef.current.value;

      const checkExistingUser = postQueue.find(
        (post) => post.userId === entrId
      );

      if (!checkExistingUser) {
        alert("Please create a account first!");
        userIdRef.current.value = "";
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const tags = tagsRef.current.value.trim().split(/\s+/);
    const likes = 0;

    userIdRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    tagsRef.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        title,
        body,
        tags,
        reactions: {
          likes,
        },
      }),
    })
      .then((res) => res.json())
      .then((posts) => {
        addPosts(posts);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdRef}
          className="form-control"
          id="userIdInput"
          placeholder="Enter you user id"
          onKeyDown={handleEnterPress}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <textarea
          type="text"
          ref={titleRef}
          className="form-control"
          id="titleInput"
          placeholder="title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Write Something
        </label>
        <textarea
          type="text"
          ref={bodyRef}
          rows="3"
          className="form-control"
          id="bodyInput"
          placeholder="How are you feeling today.."
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsRef}
          className="form-control"
          id="tagsInput"
          placeholder="Provide space seperated tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
