import React, { useEffect } from "react";
import Form from "./Inquiry_form";
import "./Inquiry_page.css";

const Inquiry = () => {
  useEffect(() => {
    document.title = "Inquiry | Nayan Studio";
  }, []);
  return (
    <div className="Inquiry">
      <div className="Inquiry_view">
        <div className="inquiry_inner_view">
          {" "}
          <div className="inquiry_image">
            <img
              src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899134.jpg?semt=ais_hybrid"
              alt=""
            />
          </div>
          <div className="inquiry_content">
            <div className="inquiry_content_email">
              <p>
                <span>Email: </span>vesunayanstudio@gmail.com
              </p>
            </div>
            <div className="inquiry_content_p">
              <p>
                You can draft an email to us on the above mentioned address,{" "}
                <br /> or can send us the details by filling the form below.{" "}
              </p>
              <p>Thank you!</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Inquiry;
