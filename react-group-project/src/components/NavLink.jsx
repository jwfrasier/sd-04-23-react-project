import React from "react";

const NavLink = ({ link, isSelected, setIsSelected, handleLinkClick }) => {
  return (
    <li
      className={`flex flex-col items-center gap-2 hover:cursor-pointer nav_link lg:duration-200 lg:ease-in lg:px-3 lg:rounded-2xl ${
        isSelected == link.text ? "selected" : ""
      }`}
      onClick={() => handleLinkClick(link.text)}
    >
      <span className="text-3xl lg:hidden">{link.icon}</span>
      <span className="text-sm lg:text-xl">{link.text}</span>
    </li>
  );
};

export default NavLink;
