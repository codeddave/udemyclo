import React from "react";
import "./Courses.css";
import Logo from "../../code2.jpg";
import Logo1 from "../../code3.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

function Courses() {
  const [instructors, setinstructors] = useState([]);

  const fetchInstructor = async () => {
    try {
      const res = await axios.get(
        "https://myjsondata1.herokuapp.com/instructor/"
      );
      setinstructors(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchInstructor();

  return (
    <div className="courses" style={{ marginLeft: "120px" }}>
      <div className="row">
        {instructors.map((instructor) => (
          <div
            className="card"
            style={{
              maxWidth: "23rem",
              marginBottom: "40px",
              Height: "100px",
            }}
          >
            <img
              className="card-img-top"
              src={instructor.imageurl}
              alt="Card image cap"
              style={{
                maxWidth: "23rem",
                marginBottom: "40px",
                Height: "100px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{instructor.title}</h5>
              <p className="card-text"></p>

              <blockquote class="blockquote mb-0">
                <footer class="blockquote-footer">
                  <i>By {instructor.name}</i>
                </footer>
              </blockquote>

              <a
                href={instructor.videourl}
                className="btn btn-primary"
                style={{ marginTop: "20px" }}
              >
                Start Course
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Courses;
