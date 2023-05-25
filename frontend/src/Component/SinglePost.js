import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import Content from "./Content";
import { useParams } from "react-router-dom";
import app_config from "../config";
import axios from "axios";

const SinglePost = () => {
  const url = app_config.app_url;

  const {id} = useParams();
  console.log("nbhbgvc", id);

  const [blog , setBlog  ] = useState([])
  const getData = ()=>{

    axios.get(url+`/post/posts/${id}`).then((response)=>{
      console.log(response);
      setBlog(response?.data?.post)
    }).catch((err)=>{
      console.log(err)
    })
  }


  useEffect(() => {
   getData();
  }, [])
  
  return (
    <div>
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content">
                {/* ======= Single Post Content ======= */}
                <Content blogData={blog} />
                <Comment/>
                {/* End Single Post Content */}
               
                {/* <div className="aside-block">
                  <h3 className="aside-title">Categories</h3>
                  <ul className="aside-links list-unstyled">
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Business
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Culture
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Sport
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Food
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Politics
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Celebrity
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Startups
                      </a>
                    </li>
                    <li>
                      <a to="category.html">
                        <i className="bi bi-chevron-right" /> Travel
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* End Categories */}
                {/* <div className="aside-block">
                  <h3 className="aside-title">Tags</h3>
                  <ul className="aside-tags list-unstyled">
                    <li>
                      <a to="category.html">Business</a>
                    </li>
                    <li>
                      <a to="category.html">Culture</a>
                    </li>
                    <li>
                      <a to="category.html">Sport</a>
                    </li>
                    <li>
                      <a to="category.html">Food</a>
                    </li>
                    <li>
                      <a to="category.html">Politics</a>
                    </li>
                    <li>
                      <a to="category.html">Celebrity</a>
                    </li>
                    <li>
                      <a to="category.html">Startups</a>
                    </li>
                    <li>
                      <a to="category.html">Travel</a>
                    </li>
                  </ul>
                </div> */}
                {/* End Tags */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SinglePost;
