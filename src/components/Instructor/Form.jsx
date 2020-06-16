import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import classnames from "classnames";
import Logo from "../../teachudemy.jpg";
import { useHistory } from "react-router-dom";

import axios from "axios";

function Form() {
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);

  const [video, setvideo] = useState("");
  const [loadingvid, setloadingvid] = useState(false);
  const [errors, seterrors] = useState({});

  const [inputData, setinputData] = useState({
    name: "",
    title: "",
    description: " ",
  });

  const history = useHistory();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "akyk10jb");
    setloading(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/codedave/image/upload/",

      {
        method: "POST",
        body: data,
        api_key: "747739114566239",
      }
    );

    const { secure_url } = await res.json();

    setimage(secure_url);
    console.log(secure_url);
    setloading(false);
  };

  const uploadVideo = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "akyk10jb");
    setloadingvid(true);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/codedave/video/upload/",

      {
        method: "POST",
        body: data,
        api_key: "747739114566239",
      }
    );

    const { secure_url } = await res.json();

    setvideo(secure_url);
    setloadingvid(false);
  };

  const handleChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const { name, title, description } = inputData;

    const jsonData = {
      title: title,
      name: name,
      description: description,
      imageurl: image,
      videourl: video,
    };
    console.log(jsonData);
    e.preventDefault();
    if (jsonData.name === "") {
      seterrors({ name: "Name is required" });
      return;
    }

    if (jsonData.title === "") {
      seterrors({ title: "title is required" });
      return;
    }
    if (jsonData.description === "") {
      seterrors({ description: "description is required" });
      return;
    }

    axios
      .post("https://myjsondata1.herokuapp.com/instructor", jsonData)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setinputData({
      name: "",
      title: "",
      description: " ",
    });
    history.push("/");
  };

  return (
    <div>
      <form style={{ marginLeft: "30px" }}>
        <div className="form-group">
          <label htmlFor=""> Name</label>
          <input
            type="text"
            className={classnames("form-control", {
              "is-invalid": errors.name,
            })}
            placeholder="Insert Your Name"
            value={inputData.name}
            onChange={handleChange}
            name="name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor=""> Course Title</label>
          <input
            type="text"
            placeholder="Insert Course Title"
            value={inputData.title}
            name="title"
            onChange={handleChange}
            className={classnames("form-control", {
              "is-invalid": errors.title,
            })}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor=""> Course Description</label>
          <input
            type="text"
            placeholder="Insert Course Description"
            className={classnames("form-control", {
              "is-invalid": errors.description,
            })}
            value={inputData.description}
            name="description"
            onChange={handleChange}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description}</div>
          )}
        </div>

        <h4>Upload Course Image </h4>
        <input
          type="file"
          name="file"
          placeholder="upload an image"
          onChange={uploadImage}
        />
        <h4>Upload Course Video </h4>
        <input
          type="file"
          name="file"
          placeholder="upload a video"
          onChange={uploadVideo}
        />
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <img src={image} style={{ width: "300px" }} />
        )}
        {loadingvid ? (
          <h3>Loading...</h3>
        ) : (
          <ReactPlayer controls={true} url={video} playing height="10px" />
        )}
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
