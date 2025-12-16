import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store.jsx";
import PostsComp from "./components/PostsComp.jsx";
import SideSection from "./components/SideSection.jsx";

function App() {
  const [selectedSidebar, setSelectedSidebar] = useState("Home");

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const fetchPostsData = (fetchPosts) => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        fetchPosts(data.posts);
      });
  };

  return (
    <PostListProvider>
      <div className="container-app">
        {!showSidebar ? (
          <div className="sidebar-container-collapsed">
            <SideSection toggleSidebar={toggleSidebar} />
          </div>
        ) : (
          <Sidebar
            selectedSidebar={selectedSidebar}
            setSelectedSidebar={setSelectedSidebar}
            toggleSidebar={toggleSidebar}
          />
        )}

        <div className={`site-bound-content ${showSidebar && "expanded"}`}>
          <Header />

          {selectedSidebar === "Create Post" ? (
            <CreatePost />
          ) : (
            <PostsComp fetchPostsData={fetchPostsData} />
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
