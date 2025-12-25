import { Link } from "react-router-dom";

const SideComponents = ({ selectedSidebar, setSelectedSidebar }) => {
  const defaultComponents = [
    {
      name: "Home",
      path: "/",
      icon: "home",
    },
    // {
    //   name: "Chats",
    //   icon: "chat-dots",
    // },
    {
      name: "Create Post",
      path: "/create-post",
      icon: "plus-square",
    },
  ];
  // const handleOnSideClick = (component) => {
  //   selectedSidebar(component);
  // };
  return (
    <>
      {defaultComponents.map((comp) => {
        return (
          <li
            key={comp.name}
            className="nav-item"
            onClick={() => setSelectedSidebar(comp.name)}
          >
            <Link
              to={comp.path}
              className={`nav-link text-white ${
                selectedSidebar === comp.name && "active"
              }`}
              aria-current="page"
            >
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref={`#${comp.icon}`}></use>
              </svg>
              {comp.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
export default SideComponents;
