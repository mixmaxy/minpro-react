import { useUsers } from "../hooks";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import styles from "./Home.module.css";

export default function HomePage() {
  const {
    users,
    currentPage,
    totalPages,
    total,
    loading,
    error,
    setCurrentPage,
  } = useUsers();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      {/* Hero section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.animateUp}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Live Data from ReqRes API
            </div>
            <h1 className={styles.title}>User Directory</h1>
            <p className={styles.subtitle}>
              Browse and explore all registered users. Click any card to view
              their full profile.
            </p>
          </div>

          {/* Stats */}
          {!loading && !error && (
            <div className={styles.statsSection}>
              <div className={styles.statCard}>
                <svg
                  className={styles.statIcon}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className={styles.statText}>{total} total users</span>
              </div>
              <div className={styles.statCard}>
                <svg
                  className={styles.statIcon}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <span className={styles.statText}>
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={styles.mainContent}>
        {/* Error state */}
        {error && (
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
              <svg
                className={styles.errorIconSvg}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className={styles.errorTitle}>Something went wrong</h3>
            <p className={styles.errorMessage}>{error}</p>
            <button
              onClick={() => setCurrentPage(1)}
              className={styles.retryButton}
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading skeleton */}
        {loading && (
          <div className={styles.gridContainer}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={styles.skeletonCard}>
                <div className={styles.skeletonHeader}>
                  <div className={styles.skeletonAvatar} />
                  <div className={styles.skeletonContent}>
                    <div className={styles.skeletonLine} />
                    <div
                      className={`${styles.skeletonLine} ${styles.skeletonLineShort}`}
                    />
                  </div>
                </div>
                <div className={styles.skeletonFooter}>
                  <div className={styles.skeletonFooterItem} />
                  <div className={styles.skeletonFooterItem} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Users grid */}
        {!loading && !error && (
          <>
            <div className={styles.gridContainer}>
              {users.map((user, index) => (
                <UserCard key={user.id} user={user} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};
