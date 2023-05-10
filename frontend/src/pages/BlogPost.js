// import "../styles/blogpost.css";
// import React, { useState, useRef, useMemo } from "react";
// import JoditEditor from "jodit-react";
// import { useFormik } from "formik";

// const BlogPost = () => {

//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(sessionStorage.getItem("user"))
//   );
//   const blogData = {
//     title: "",
//     content: "",
//     // author: currentUser._id,
//     tags: "",
//   };

//  const blogSubmit = (values)=>{
//   console.log(values)
//  }

//   const { values, handleSubmit, handleChange } = useFormik({
//     blogData,
//     onSubmit: blogSubmit,
//   });

//   const editor = useRef(null);
//   const [content, setContent] = useState("");

//   return (
//     <>
//       <div className="post_container">
//         <div className="post_card">
//           <p>What is Going in your mind ?</p>
//           <form className="blog-form" onSubmit={handleSubmit}>
//             <div>
//               <label className="post-label">Title</label>
//               <input
//                 className="blog_input"
//                 type="text"
//                 placeholder="Enter Title"
//                 id="title"
//                 value={values.title}
//                 onChange={handleChange}

//               />
//             </div>
//             <div>
//               <label className="post-label">Description</label>
//               {/* <JoditEditor
//                 ref={editor}
//                 value={content}
//                 tabIndex={5}
//                 onChange={(newContent) => {
//                   console.log(newContent);
//                   setContent(newContent);
//                 }}
//               /> */}
//               <div dangerouslySetInnerHTML={{ __html: content }}></div>
//               <JoditEditor
//                 ref={editor}
//                 tabIndex={5}
//                 value={values.content}
//                 onChange={handleChange}
//                 // onChange={(newContent) => {
//                 //   console.log(newContent);
//                 //   setContent(newContent);
//                 // }}
//               />

//               {/* <textarea
//                 className="blog_input"
//                 rows="6"
//                 cols="50"
//                 type="text"
//                 placeholder="Enter Description"
//               /> */}
//               <p>{content}</p>
//             </div>
//             <div>
//               <label className="post-label">Upload Images</label>
//               <input
//                 className="blog_input"
//                 type="file"
//                 accept=".png ,
//                 .jpg"
//                 placeholder="your file"
//               />
//             </div>
//             <div>
//               <label className="post-label">Category</label>
//               <select id="category" value={values.tags} onChange={handleChange} className="blog_input">
//                 <option>Programming</option>
//                 <option>ComputerProgramming</option>
//                 <option>Technical</option>
//                 <option>Lifestyle</option>
//                 <option>News</option>
//                 <option>Food</option>
//                 <option>Other</option>
//               </select>
//             </div>
//             <div>
//               <button type="submit" className="btn-post">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogPost;
import "../styles/blogpost.css";
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { useFormik } from "formik";
import  storage from "../firebase";
import { ref , uploadBytes} from "firebase/storage";
import { v4 } from "uuid";
// import firebase from 'firebase/app';
import 'firebase/storage';



const BlogPost = () => {
  
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.namev + v4()}`);
    uploadBytes(imageRef, imageUpload).then(()=>{
      alert("Image Uploaded")
    });
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const blogData = {
    title: "",
    content: "",
    tags: "",
  };

  const blogSubmit = (values) => {
    console.log(values);
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
              <div dangerouslySetInnerHTML={{ __html: values.content }}></div>
            </div>
            {/* FILE */}
            <div>
              <label className="post-label">Upload Images</label>
              <input
                className="blog_input"
                type="file"
                accept=".png, .jpg"
                placeholder="your file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              />
              <button onclick={uploadImage}>Upload Image</button>
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
                <option>Lifestyle</option>
                <option>News</option>
                <option>Food</option>
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
