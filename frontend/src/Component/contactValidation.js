import * as Yup from "yup";

export const validation = Yup.object({
  subject: Yup.string().min(5,"Subject must be atleast 5 characters !").required("Required field !"),
  message: Yup.string()
    .min(10, "Message must be atleast 10 characters !")
    .required("Required field !"),
});


