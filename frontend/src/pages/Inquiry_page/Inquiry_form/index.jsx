import React from "react";
import { useFormik } from "formik";
import { inquiryFormSchema } from "./validationSchema"; // Validation logic
import "./inquiry_form_style.css"; // Style remains unchanged
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://ns-kfr5.onrender.com";

const Index = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      details: "",
    },
    validationSchema: inquiryFormSchema, // Reusing the validation schema
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Send the form data to the backend server
        const response = await fetch(`${BASE_URL}/api/inquiry/mail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            subject: values.subject,
            eventDetails: values.details,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send the form data.");
        }

        const result = await response.json();

        // Toast message for successful form submission
        toast.success(`${result.message || "Success"} \n Thank you!`);
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        // Toast message for form submission failure
        toast.error(
          `Failed to submit the form. Please try again. Error: ${error.message}`
        );
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false); // Ensure submit button re-enables
      }
    },
  });

  return (
    <div className="Form_view">
      {/* Toast Container for displaying toast messages */}
      <ToastContainer position="top-right" autoClose={3000} />

      <form className="Inquiry_form" onSubmit={formik.handleSubmit}>
        <div className="Input_text">
          <label htmlFor="Name">
            Name <span>(required)</span>
          </label>
          <div className="Full_name">
            <label htmlFor="firstName" className="user_name">
              <span>First Name</span>
              <input
                type="text"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "name_field error"
                    : "name_field"
                }
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <div className="error_message">{formik.errors.firstName}</div>
              )}
            </label>
            <label htmlFor="lastName" className="user_name">
              <span>Last Name</span>
              <input
                type="text"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? "name_field error"
                    : "name_field"
                }
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <div className="error_message">{formik.errors.lastName}</div>
              )}
            </label>
          </div>
        </div>

        <div className="Input_text">
          <label htmlFor="email">
            Email Address <span>(required)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error_message">{formik.errors.email}</div>
          )}
        </div>

        <div className="Input_text">
          <label htmlFor="subject">
            Subject <span>(required)</span>
          </label>
          <input
            type="text"
            name="subject"
            max={200}
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.subject && formik.errors.subject ? "error" : ""
            }
          />
          {formik.touched.subject && formik.errors.subject && (
            <div className="error_message">{formik.errors.subject}</div>
          )}
        </div>

        <div className="Input_text">
          <label htmlFor="details">
            Event Dates / Details <span>(required)</span>
          </label>
          <textarea
            name="details"
            cols="30"
            rows="10"
            value={formik.values.details}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.details && formik.errors.details ? "error" : ""
            }
          ></textarea>
          {formik.touched.details && formik.errors.details && (
            <div className="error_message">{formik.errors.details}</div>
          )}
        </div>

        <div className="submit_button">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className={formik.isSubmitting ? "submitting" : ""}
          >
            {formik.isSubmitting ? <div className="processed"></div> : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
