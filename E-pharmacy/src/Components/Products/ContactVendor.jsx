import React from "react";
import "./ContactVendor.css"; // Import the CSS file

const ContactVendor = () => {
  return (
    <div>
      <div className="contact-container">
        <div>
          <h1 className="contact-title">Contact with Vendor</h1>
          <h3 className="contact-subtitle">Send request for medicine</h3>
        </div>
        <div className="form-container">
          <form>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="input-field"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Write your Message"
              className="textarea-field"
            ></textarea>

            <input
              type="submit"
              value="Send Message"
              className="submit-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactVendor;
