import React from "react";
import styles from "./MedicineStoreComponent.module.css";
import { Link } from "react-router-dom";

const MedicineStoreComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Your Nearest Medicine Store</h2>
      <div className={styles.searchContainer}>
        <p className={styles.searchText}>Search for Medicine</p>
      </div>
      <button className={styles.seeMoreButton}>
        <Link to="/shop">See More</Link>
        <span className={styles.arrow}>&rarr;</span>
      </button>
    </div>
  );
};

export default MedicineStoreComponent;
