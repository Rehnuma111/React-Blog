import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import app_config from "../config";
import { useState } from "react";

const AllBlogPost = () => {
  const url = app_config.app_url;

  const [data, setData] = useState([]);

  const { category } = useParams();
  console.log("category", category);

  const getData = () => {
    axios
      .get(url + `/post/category/${category}`)
      .then((response) => {
        console.log("res", response);
        setData(response?.data?.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data", data[0]?.file);


  function truncateContent(content, wordLimit) {
    const words = content.split(' '); // Split the content into an array of words
    const truncatedWords = words.slice(0, wordLimit); // Select the first 'wordLimit' words
    const truncatedContent = truncatedWords.join(' '); // Join the words back into a string
    return truncatedContent;
  }

  return (
    <div>
      <>
        <main id="main">
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  <h3 className="category-title">Category: {category}</h3>
                  {data.length > 0
                    ? data.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="d-md-flex post-entry-2 half"
                          >
                            <Link
                              to={`/singlePost/${item._id}`}
                              className="me-4 thumbnail"
                            >
                              <img
                                src={item?.file}
                                alt=""
                                className="img-fluid"
                              />
                            </Link>
                            <div>
                              <div className="post-meta">
                                <span className="date">{category}</span>{" "}
                                <span className="mx-1">•</span>{" "}
                                <span>{item?.createdAt}</span>
                              </div>
                              <h3>
                                <Link to="single-post.html">{item?.title}</Link>
                              </h3>
                              <p>
                                {/* <div
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                ></div> */}
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: truncateContent(item.content, 100),
                                  }}
                                ></div>
                              </p>
                              <div className="d-flex align-items-center author">
                                <div className="photo">
                                  <img
                                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="name">
                                  <h3 className="m-0 p-0">{item?.author?.name}</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : `No Blog found for ${category}`}
                </div>
                 <div className="col-md-3">
                 
                  <div className="aside-block">
                    <h3 className="aside-title">Categories</h3>
                    <ul className="aside-links list-unstyled">
                      <li>
                        <a href="category">
                          <i className="bi bi-chevron-right" /> Business
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Culture
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Sport
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Food
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Politics
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Celebrity
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Startups
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          <i className="bi bi-chevron-right" /> Travel
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="aside-block">
                    <h3 className="aside-title">Tags</h3>
                    <ul className="aside-tags list-unstyled">
                      <li>
                        <a href="category.html">Programming</a>
                      </li>
                      <li>
                        <a href="category.html">Tech</a>
                      </li>
                      <li>
                        <a href="category.html">Sport</a>
                      </li>
                      <li>
                        <a href="category.html">Food</a>
                      </li>
                      <li>
                        <a href="category.html">Politics</a>
                      </li>
                      <li>
                        <a href="category.html">Celebrity</a>
                      </li>
                      <li>
                        <a href="category.html">Startups</a>
                      </li>
                      <li>
                        <a href="category.html">Travel</a>
                      </li>
                    </ul>
                  </div>
                  {/* End Tags */}
                </div> 
              </div>
            </div>
          </section>
        </main>
        {/* End #main */}
      </>
    </div>
  );
};

export default AllBlogPost;
