import React, { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menu_open from "../../assets/menu_open.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current.style.right = "0";
    } else {
      menuRef.current.style.right = "-350px";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
      <img
        src={menu_open}
        onClick={toggleMenu}
        alt="menu toggle"
        className="nav-mob-toggle"
      />

      <ul ref={menuRef} className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <AnchorLink
              className={`anchor-link ${menu === item.id ? "active" : ""}`}
              offset={50}
              href={`#${item.id}`}
              onClick={() => {
                setMenu(item.id);
                setIsMenuOpen(false);
              }}
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
