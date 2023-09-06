import React from "react";
import "./BannerIcon.css";

const BannerIcon = ({ icon, text }) => {
  return (
    <div className="banner-icon-container">
      <div className="banner-icon">{icon}</div>
      <p className="item-typography">{text}</p>
    </div>
  );
};

export default BannerIcon;
