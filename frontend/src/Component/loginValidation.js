import * as Yup from "yup";


export const loginSchema = Yup.object({
  
  email: Yup.string()
    .email("Email must be valid !")
    .required("Required field !"),
  password: Yup.string().min(2)
    // .matches(
    //   passwordRegExp,
    //   "Password must contain atleast one Uppercase, Lowercase, Numbers and Symbols"
    // )
    .required("Required field !"),
  
});
