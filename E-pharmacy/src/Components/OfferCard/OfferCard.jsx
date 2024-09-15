import React from "react";
import "./OfferCard.css";

const OfferCard = () => {
  return (
    <div className="offer-card-container">
      <div className="offer-card">
        <img
          className="offer-image"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-11.jpg"
          alt="Mountain"
        />
        <div className="offer-content">
          <h2 className="offer-title">DON’T MISS</h2>
          <h1 className="offer-discount">
            Huge Sale <br />
            70%
          </h1>
          <p className="offer-action">SHOP NOW</p>
        </div>
      </div>
      <div className="offer-card">
        <img
          className="offer-image"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-12.jpg"
          alt="River"
        />
        <div className="offer-content">
          <h2 className="offer-title">COMMITMENT</h2>
          <h1 className="offer-discount">
            100% Secure <br />
            delivery
          </h1>
          <p className="offer-action">READ MORE</p>
        </div>
      </div>
      <div className="offer-card">
        <img
          className="offer-image"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-13.jpg"
          alt="Forest"
        />
        <div className="offer-content">
          <h2 className="offer-title">FREE SHIPPING</h2>
          <h1 className="offer-discount">
            35% <br />
            OFF
          </h1>
          <p className="offer-action">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
