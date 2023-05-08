import "../styles/blogpost.css";
import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
const BlogPost = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <div className="post_container">
        <div className="post_card">
          <p>What is Going in your mind ?</p>
          <form className="blog-form">
            <div>
              <label className="post-label">Title</label>
              <input
                className="blog_input"
                type="text"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label className="post-label">Description</label>
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={5}
                onChange={(newContent) => {}}
              />
              {/* <textarea
                className="blog_input"
                rows="6"
                cols="50"
                type="text"
                placeholder="Enter Description"
              /> */}
              <p>{content}</p>
            </div>
            <div>
              <label className="post-label">Upload Images</label>
              <input
                className="blog_input"
                type="file"
                accept=".png , 
                .jpg"
                placeholder="your file"
              />
            </div>
            <div>
              <label className="post-label">Category</label>
              <select className="blog_input">
                <option>Business</option>
                <option>Culture</option>
                <option>Technical</option>
                <option>Lifestyle</option>
                <option>News</option>
                <option>Food</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
