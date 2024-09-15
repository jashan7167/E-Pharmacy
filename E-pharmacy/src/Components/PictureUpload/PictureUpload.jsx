import React from "react";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PictureUpload.css";

const PictureUpload = () => {
  return (
    <div className="picture-upload-container">
      <div
        className="picture-upload-bg"
        style={{
          backgroundImage: `url(https://i.imgur.com/1ZNaBq1.jpg)`,
        }}
      >
        <div className="picture-upload-content">
          <div className="picture-upload-icon">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <div className="picture-upload-text">
            <h2 className="picture-upload-title">
              Ask Your Pharmacist, <br /> Not the Internet
            </h2>
            <p className="picture-upload-description">
              We have made our systems as simple as possible. You can just take
              a picture of your prescription and send it to us to place your
              order.
            </p>
          </div>
          <div className="upload-button-container">
            <a href="/" className="picture-upload-button">
              Upload Your prescription
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureUpload;
