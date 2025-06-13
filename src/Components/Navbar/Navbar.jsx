import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.png";
import menu_close from "../../assets/menu_close.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "internship", label: "Internship" },
    { id: "project", label: "Project" },
    { id: "design", label: "Design" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        {menuItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className={`anchor-link ${menu === item.id ? "active" : ""}`}
              offset={50}
              href={`#${item.id}`}
              onClick={() => setMenu(item.id)}
            >
              {item.label}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <AnchorLink
        className="nav-connect"
        offset={50}
        href="#contact"
        onClick={() => setMenu("contact")}
      >
        Connect With Me
      </AnchorLink>
    </div>
  );
};

export default Navbar;
