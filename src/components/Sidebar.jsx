import SideComponents from "./SideComponents";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const Sidebar = ({ selectedSidebar, setSelectedSidebar, toggleSidebar }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar-expanded">
      <a
        href="#"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        onClick={(e) => {
          e.preventDefault();
          toggleSidebar();
        }}
      >
        <TbLayoutSidebarLeftCollapse
          style={{ width: "2rem", height: "1.5rem" }}
        />
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <SideComponents
          selectedSidebar={selectedSidebar}
          setSelectedSidebar={setSelectedSidebar}
        />
      </ul>{" "}
      <hr />{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>{" "}
        </a>
        {/* <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
