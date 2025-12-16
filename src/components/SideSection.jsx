import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

const SideSection = ({ toggleSidebar }) => {
  return (
    <>
      <TbLayoutSidebarLeftExpand
        className="sidesection"
        style={{
          width: "3rem",
          height: "2rem",
          color: "rgb(255, 255, 255)",
          backgroundColor: "#20252a",
        }}
        onClick={() => toggleSidebar()}
      />
    </>
  );
};

export default SideSection;
