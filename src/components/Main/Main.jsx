import React from "react";

import { Link } from "react-router-dom";

import "./Main.css";

import Logo from "../../background.jpg";

function Main() {
  return (
    <div>
      <div className="main">
        <img style={{ width: "100%" }} src={Logo} alt="background" />

        <div className="row text">
          <div className="col-sm-12">
            <h1>Learn on your schedule </h1>

            <p>
              {" "}
              Study any topic, anytime. Choose from thousands of <br />
              expert-led courses now.{" "}
            </p>
            <Link to="/courses">
              <button type="button" className="btn learnbtn btn-lg btn-danger">
                <h3>Start Learning</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
