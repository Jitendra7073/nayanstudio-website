import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import NotFound from "../../assets/404.svg";
const index = () => {
  return (
    <div className="NotFound_Full_page">
      <Link to="/">
        <div className="Page_Farmat">
          <img src={NotFound} />
        </div>
      </Link>
    </div>
  );
};

export default index;
