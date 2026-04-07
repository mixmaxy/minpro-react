import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                }}
              >
                R
              </span>
            </div>
            <span className={styles.logoText}>
              RepoMe<span className={styles.logoDot}>.</span>
            </span>
          </Link>

          {/* Nav Links */}
          <div className={styles.navLinks}>
            {isAuthenticated ? (
              <>
                <Link
                  to="/"
                  className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : styles.navLinkInactive}`}
                >
                  Users
                </Link>

                <div className={styles.userSection}>
                  <div className={styles.userInfo}>
                    <span className={styles.userLabel}>Logged in as</span>
                    <span className={styles.userEmail}>{user?.email}</span>
                  </div>
                  <button onClick={handleLogout} className={styles.logoutBtn}>
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.authLinks}>
                <Link
                  to="/login"
                  className={`${styles.navLink} ${isActive("/login") ? styles.navLinkActive : styles.navLinkInactive}`}
                >
                  Login
                </Link>
                <Link to="/register" className={styles.registerBtn}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
