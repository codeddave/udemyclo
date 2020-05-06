import React from "react";
import Form from "./Form";
import Logo from "../../teachudemy.jpg";

function Instructor() {
  return (
    <div>
      <img style={{ width: "100%" }} src={Logo} alt="Become an Instructor" />

      <div className="row text">
        <div className="col-sm-12">
          <h1>Make a global impact</h1>

          <p>
            Create an online video course and earn money by teaching people
            around the world.
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
}
export default Instructor;
