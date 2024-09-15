import React from "react";
import "./CreateStore.css";

function CreateStore() {
  return (
    <div className="con">
      <div className="header">
        <div className="heading">
          <h1>Create Your Store</h1>
        </div>
        <div className="subtitle">
          <p>Information You Share Will Be Displayed In Public</p>
        </div>
      </div>
      <hr className="line" />
      <div className="container">
        <form>
          <div className="input-container">
            <label htmlFor="name">Store Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="ownername">Owner Name:</label>
            <input type="text" id="ownername" name="ownername" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="number">Phone Number:</label>
            <input type="tel" id="number" name="number" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="image">Shop Logo:</label>
            <input type="file" id="image" name="image" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="address">Street Address:</label>
            <input type="text" id="address" name="address" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="city" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" id="confirm" name="confirm" />
          </div>
          <hr className="line" />
          <div className="input-container">
            <label htmlFor="delivery">Has Own Delivery System:</label>
            <select id="delivery" name="delivery">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="button-container">
            <button className="cancel">Cancel</button>
            <button type="submit" className="create-store">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStore;
