const SideComponents = ({ selectedSidebar, setSelectedSidebar }) => {
  const defaultComponents = [
    {
      name: "Home",
      icon: "home",
    },
    // {
    //   name: "Chats",
    //   icon: "chat-dots",
    // },
    {
      name: "Create Post",
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
            <a
              href="#"
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
            </a>
          </li>
        );
      })}
    </>
  );
};
export default SideComponents;
