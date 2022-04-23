import React from "react";
import "./styles.css";
import main1 from "../../../assets/main-1.png";
import main2 from "../../../assets/main-2.png";

const Image = () => {
  return (
    <div className="image-container">
      <img src={main1} alt="" className="image-main" />
    </div>
  );
};

export default Image;
