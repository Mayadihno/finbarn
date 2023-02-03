import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine, RiLeafFill } from "react-icons/ri";

const MenuBar = () => (
  <>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "active-links" : "")}
    >
      Home
    </NavLink>
    <NavLink
      to="/products"
      className={({ isActive }) => (isActive ? "active-links" : "")}
    >
      Shop
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) => (isActive ? "active-links" : "")}
    >
      About us
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) => (isActive ? "active-links" : "")}
    >
      Contact Us
    </NavLink>
  </>
);

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__flex">
            <div className="navbar__left">
              <div className="navbar__logo">
                <Link to={"/"}>
                  <div className="logo">
                    <RiLeafFill fontSize={30} color="green" />F
                  </div>
                  <span>Finbarn</span>
                </Link>
              </div>
            </div>
            <div className="navbar__middle">
              <div className="navbar__menu">
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
        <div
          className="navbar__menu__container"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <RiCloseLine
              size={30}
              color="white"
              onClick={() => setToggle(false)}
            />
          ) : (
            <RiMenu3Line
              size={30}
              color="white"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__container__menu scale-up-center">
              <div className="navbar__links">
                <MenuBar />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
