import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import { loginSchema } from "../Component/loginValidation";
import axios from "axios";
import app_config from "../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const url = app_config.app_url;

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();

  const formSubmit = (values) => {
    console.log("abhbsh", values);
    axios
      .post(url + "/user/login", values)
      .then((response) => {
        console.log("res", response);
        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "You have login Successfully!",
          });
          // console.log("hbxhsvch" ,response.data.user);
          const data = response.data.user;
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        }
      })
      .catch((er) => {
        console.log(er);
        console.log(er.response.status);
        if (er.response.status === 401) {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Email or password is in correct!",
          });
        }
      });
  };

  const { errors, values, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: formSubmit,
    });
  // console.log(values);
  // console.log(errors);
  return (
    <div>
      <Wrapper>
        <div className="login-page">
          <div className="form">
            <div className="login">
              <div className="login-header">
                <h3>LOGIN</h3>
                <p>Please enter your credentials to login.</p>
              </div>
            </div>
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="login-form"
            >
              <input
                type="text"
                placeholder="username"
                name="email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ color: "red" }}>{errors.email}</p>
              ) : null}
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p style={{ color: "red" }}>{errors.password}</p>
              ) : null}
              <button>login</button>
              <p className="message">
                Not registered? <a href="#">Create an account</a>
              </p>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Login;

const Wrapper = styled.main`
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
header .header{
  background-color: #fff;
  height: 45px;
}
header a img{
  width: 134px;
margin-top: 4px;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.login-page .form .login{
  margin-top: -31px;
margin-bottom: 26px;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background-color: #328f8a;
  background-image: linear-gradient(45deg,#328f8a,#08ac4b);
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}

body {
  background-color: #328f8a;
  background-image: linear-gradient(45deg,#328f8a,#08ac4b);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 `;
