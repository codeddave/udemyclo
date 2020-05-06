import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../udemylogo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-sm fixed navbar-light  mb-3 py-0">
        <a href="/">
          <img src={Logo} />
        </a>

        <ul className="navbar-nav navlist mr-auto">
          <li className="nav-item ">
            <Link to="/courses" className="nav-link">
              Start Learning
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/instructor" className="nav-link">
              Teach on Udemy
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link"></Link>
          </li>
        </ul>

        <Link to="/login">
          <button className="loginbtn"> Log In </button>
        </Link>
      </nav>
    </div>
  );
}
export default Header;
