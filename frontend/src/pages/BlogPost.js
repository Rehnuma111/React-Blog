import "../styles/blogpost.css"; 
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useFormik } from "formik";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "firebase/storage";
import app_config from "../config";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Base_url = app_config.app_url;

const BlogPost = () => {

  const navigate =  useNavigate();

  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    return uploadBytes(imageRef, imageUpload).then(() => {
      return getDownloadURL(imageRef);
    });
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const blogData = {
    title: "",
    content: "",
    file: "",
    tags: "",
  };

  const blogSubmit = (values) => {
    uploadImage()
      .then((url) => {
        const finalData = {
          title: values.title,
          content: values.content,
          author: currentUser?._id,
          file: url,
          tags: values.tags,
        };

        console.log("final Data", finalData);
        // Call your backend API with the form values and the image URL here
        axios
          .post(Base_url + "/post/posts", finalData)
          .then((res) => {
            console.log("blog response", res.status);
            if (res.status === 201) {
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Blog Post Sucessfully ",
              });
              navigate("/")
            }
          })
          .catch((err) => {
            console.log("error", err);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: blogData,
    onSubmit: blogSubmit,
  });

  const editor = useRef(null);

  return (
    <>
      <div className="post_container">
        <div className="post_card">
          <p>What is Going in your mind ?</p>
          <form className="blog-form" onSubmit={handleSubmit}>
            <div>
              <label className="post-label">Title</label>
              <input
                className="blog_input"
                type="text"
                placeholder="Enter Title"
                id="title"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="post-label">Description</label>
              <JoditEditor
                ref={editor}
                tabIndex={5}
                value={values.content}
                onChange={(value) => {
                  handleChange({ target: { id: "content", value } });
                }}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: values.content }}></div> */}
            </div>
            {/* FILE */}
            <div>
              <label className="post-label">Upload Images</label>
              <input
                className="blog_input"
                type="file"
                accept=".png, .jpg"
                placeholder="your file"
                onClick={uploadImage}
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              {/* <button type="submit" >Upload Image</button> */}
            </div>
            <div>
              <label className="post-label">Category</label>
              <select
                id="tags"
                value={values.tags}
                onChange={handleChange}
                className="blog_input"
              >
                <option>Programming</option>
                <option>ComputerProgramming</option>
                <option>Technical</option>
                <option>Javascript</option>
                <option>React JS</option>
                <option>News </option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <button type="submit" className="btn-post">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
