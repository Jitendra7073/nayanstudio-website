import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { Link } from "react-router-dom";
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";
 

const Index = ({ onLogoClick }) => {
  const listItems = [
    { label: "Home", navigation: "/" },
    { label: "Galleries", navigation: "/gallery" },
    { label: "Stories", navigation: "/stories" },
    { label: "Testimonials", navigation: "/testimonial" },
    { label: "About", navigation: "/about" },
    { label: "Inquire", navigation: "/inquiry" },
  ];

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <header>
      <section className="UnderHeader">
        <div className="top-header-section">
          <div className="logoImg">
            <img
              className="logo"
              src={Logo}
              alt="Nayan Studio Logo"
              onClick={onLogoClick}
              style={{ cursor: "pointer" }}
            />
          </div>
          <span onClick={openNav} className="menu-button">
            <RiMenuUnfold3Line className="Open_icon"/>
          </span>
        </div>
        <nav className="navbar" aria-label="Main Navigation">
          <ul className="unordered-list">
            {listItems.map((item, index) => (
              <li className="list-item" key={index}>
                <Link to={item.navigation}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div id="myNav" className="overlay">
          <span className="closebtn" onClick={closeNav}>
            <RiMenuUnfold4Line fontSize={30}/>
          </span>
          <div className="overlay-content">
            {listItems.map((item, index) => (
              <Link to={item.navigation} key={index} onClick={closeNav}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Index;
