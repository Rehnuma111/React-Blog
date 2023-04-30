import * as Yup from "yup";

const passwordRegExp =
  /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#\$%\^&\*])(?=.{8,})/;

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be between 4 to 25 characters !")
    .max(25, "Name must be between 4 to 25 characters !")
    .required("Required field !"),
  email: Yup.string()
    .email("Email must be valid !")
    .required("Required field !"),
  password: Yup.string()
    // .matches(
    //   passwordRegExp,
    //   "Password must contain atleast one Uppercase, Lowercase, Numbers and Symbols"
    // )
    .required("Required field !"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Required field !"),
});
