import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../Component/signupValidation";
import app_config from "../config";
import axios from "axios";
import Swal from "sweetalert2";

const url = app_config.app_url;

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Signup = () => {
  const formSubmit = (values) => {
    // console.log("bhvcv", values);
    axios
      .post(url + "/user/register", values)
      .then((res) => {
        console.log("response", res)
        if(res.request.status ===  200){
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Registered Successfully!",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        console.log("status", err);
        if(err.response.status === 409){
          Swal.fire({
            icon:"error",
            title:"Failed",
            text:"Email is already exist!"
          })
        }
      });
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: formSubmit,
    });
  // console.log(errors);

  return (
    <div className="card">
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="name">
              <b>Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p style={{ color: "red", marginTop: "-1rem" }}>{errors.name}</p>
            ) : null}

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p style={{ color: "red", marginTop: "-1rem" }}>{errors.email}</p>
            ) : null}
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p style={{ color: "red", marginTop: "-1rem" }}>
                {errors.password}
              </p>
            ) : null}
            <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="confirm_password"
              id="confirm_password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p style={{ color: "red", marginTop: "-1rem" }}>
                {errors.confirm_password}
              </p>
            ) : null}
            <hr />
            <p>
              By creating an account you agree to our{" "}
              <a href="#">Terms &amp; Privacy</a>.
            </p>
            <button type="submit" className="registerbtn">
              Register
            </button>
            <div className="signin">
              <p>
                Already have an account? <a href="#">Sign in</a>.
              </p>
            </div>
          </div>
        </form>
      </Wrapper>
    </div>
  );
};

export default Signup;

const Wrapper = styled.main`
  * {
    box-sizing: border-box;
  }

  /* Add padding to containers */
  .container {
    padding: 2rem;
    margin: 5rem auto;

    width: 50%;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  /* Full-width input fields */
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 15px;
    margin: 5px 0 22px 0;
    display: inline-block;
    border: none;
    background: #f1f1f1;
  }

  input[type="text"]:focus,
  input[type="password"]:focus {
    background-color: #ddd;
    outline: none;
  }

  /* Overwrite default styles of hr */
  hr {
    border: 1px solid #f1f1f1;
    margin-bottom: 25px;
  }

  /* Set a style for the submit/register button */
  .registerbtn {
    background-color: #04aa6d;
    color: white;
    padding: 16px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .registerbtn:hover {
    opacity: 1;
  }

  /* Add a blue text color to links */
  a {
    color: dodgerblue;
  }

  /* Set a grey background color and center the text of the "sign in" section */
  .signin {
    background-color: #f1f1f1;
    text-align: center;
    height: 3rem;
  }
`;
