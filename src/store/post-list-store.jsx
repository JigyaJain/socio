import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postQueue: [],
  addPosts: () => {},
  clearPosts: () => {},
  fetchPosts: () => {},
});

const ACTIONS = {
  ADD_POSTS: "add-posts",
  CLEAR_POSTS: "clear-posts",
  FETCH_POSTS: "fetch-posts",
};

const postListReducer = (state, action) => {
  let newPosts = state;
  switch (action.type) {
    case ACTIONS.ADD_POSTS:
      return (newPosts = [action.payload, ...newPosts]);

    case ACTIONS.CLEAR_POSTS:
      return (newPosts = newPosts.filter(
        (item) => item.id !== action.payload.postId
      ));

    case ACTIONS.FETCH_POSTS:
      return (newPosts = action.payload.posts);

    default:
      return newPosts;
  }
};
const PostListProvider = ({ children }) => {
  const [postQueue, dispatchPostQueue] = useReducer(postListReducer, []);

  const addPosts = (id, title, content, tags) => {
    const newPostsAction = {
      type: ACTIONS.ADD_POSTS,
      payload: {
        id,
        title,
        content,
        tags,
        reactions: 0,
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
        fetchPosts: fetchPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
