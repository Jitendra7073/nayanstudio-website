import * as Yup from "yup";

export const inquiryFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "First Name should only contain alphabets.")
    .min(2, "First Name must be at least 2 characters.")
    .max(50, "First Name must not exceed 50 characters.")
    .required("First Name is required."),
  lastName: Yup.string()
    .trim()
    .matches(/^[A-Za-z]+$/, "Last Name should only contain alphabets.")
    .min(2, "Last Name must be at least 2 characters.")
    .max(50, "Last Name must not exceed 50 characters.")
    .required("Last Name is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .max(100, "Email Address must not exceed 100 characters.")
    .required("Email Address is required."),
  subject: Yup.string()
    .trim()
    .min(5, "Subject must be at least 5 characters.")
    .max(200, "Subject must not exceed 200 characters.")
    .required("Subject is required."),
  details: Yup.string()
    .trim()
    .min(20, "Event Details must be at least 20 characters.")
    .max(500, "Event Details must not exceed 500 characters.")
    .required("Event Dates / Details is required."),
});
