import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png"; // Update the path according to your file structure
import { useAuth } from "../../Authentication/Auth";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef(null);
  const context = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add empty dependency array to run the effect only once

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <header ref={headerRef}>
      <div className={`${styles.headerContainer}`}>
        <nav className={styles.navbar}>
          <div className={styles.leftSection}>
            <Link to="/" className={styles.logo}>
              {/* Use Link instead of anchor tag */}
              <img src={logo} alt="Logo" style={{ height: "50px" }} />
              <p>E-Pharmacy</p>
            </Link>
            <ul
              className={`${styles.navMenu} ${isActive ? styles.active : ""}`}
            >
              <li onClick={removeActive}>
                <Link to="/shop" className={styles.navLink}>
                  Shop
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/" className={styles.navLink}>
                  Features
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/" className={styles.navLink}>
                  Medicine
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link to="/" className={styles.navLink}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.rightSection}>
            {context.isAuthenticated ? (
              <button
                onClick={() => {
                  context.setAuthenticated(false);
                  navigate("/login");
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button>Login</button>
              </Link>
            )}
          </div>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
