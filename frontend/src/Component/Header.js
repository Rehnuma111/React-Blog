import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <h1>ZenBlog</h1>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/singlePost">Single Post</Link>
              </li>

              <li>
                <Link to="/about">AboutUs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li> 
              <li>
                <Link to="/blogpost">Write</Link>
              </li>
            </ul>
          </nav>

          <div className="search-form-wrap js-search-form-wrap">
            <form action="search-result.html" className="search-form">
              <span className="icon bi-search" />
              <input
                type="text"
                placeholder="Search"
                className="form-control"
              />
              <button className="btn js-search-close">
                <span className="bi-x" />
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
