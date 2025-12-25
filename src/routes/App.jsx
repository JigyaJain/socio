import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import CreatePost from "../components/CreatePost.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import PostListProvider from "../store/post-list-store.jsx";
import PostsComp from "../components/PostsComp.jsx";
import SideSection from "../components/SideSection.jsx";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedSidebar, setSelectedSidebar] = useState("Home");

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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
          <div className="page-content">
            <Outlet />
            {/* {selectedSidebar === "Create Post" ? <CreatePost /> : <PostsComp />} */}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
