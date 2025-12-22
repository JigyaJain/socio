import { createContext } from "react";
import { useState, useEffect, useReducer } from "react";

export const PostList = createContext({
  postQueue: [],
  addPosts: () => {},
  clearPosts: () => {},
  fetching: false,
});

const ACTIONS = {
  ADD_POSTS: "add-posts",
  CLEAR_POSTS: "clear-posts",
  FETCH_POSTS: "fetch-posts",
};

const postListReducer = (state, action) => {
  let currPosts = state;
  switch (action.type) {
    case ACTIONS.ADD_POSTS:
      return (currPosts = [action.payload.posts, ...currPosts]);

    case ACTIONS.CLEAR_POSTS:
      return (currPosts = currPosts.filter(
        (item) => item.id !== action.payload.postId
      ));

    case ACTIONS.FETCH_POSTS:
      return (currPosts = action.payload.posts);

    default:
      return currPosts;
  }
};
const PostListProvider = ({ children }) => {
  const [postQueue, dispatchPostQueue] = useReducer(postListReducer, []);

  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", signal)
      .then((res) => res.json())
      .then((data) => {
        fetchPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const addPosts = (posts) => {
    const newPostsAction = {
      type: ACTIONS.ADD_POSTS,
      payload: {
        posts,
      },
    };
    dispatchPostQueue(newPostsAction);
  };

  const clearPosts = (postId) => {
    const newPostsAction = {
      type: ACTIONS.CLEAR_POSTS,
      payload: { postId },
    };
    dispatchPostQueue(newPostsAction);
    // console.log("Deleting post with id:", postId);
  };

  const fetchPosts = (posts) => {
    const fetchPostsAction = {
      type: ACTIONS.FETCH_POSTS,
      payload: { posts },
    };
    dispatchPostQueue(fetchPostsAction);
  };

  return (
    <PostList.Provider
      value={{
        postQueue: postQueue,
        addPosts: addPosts,
        clearPosts: clearPosts,
        fetching: fetching,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
