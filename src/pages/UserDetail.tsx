import { useParams, useNavigate, Link } from "react-router-dom";
import { useUserDetail } from "../hooks";
import styles from "./UserDetail.module.css";

export default function UserDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user, loading, error } = useUserDetail(id);

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        {/* Back button */}
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          <svg
            className={styles.backIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Users
        </button>

        {/* Loading */}
        {loading && (
          <div className={styles.loadingSkeleton}>
            <div className={styles.loadingCover} />
            <div className={styles.loadingBody}>
              <div className={styles.loadingHeader}>
                <div className={styles.loadingAvatar} />
                <div className={styles.loadingContent}>
                  <div
                    className={`${styles.loadingText} ${styles.loadingTextShort}`}
                  />
                  <div
                    className={`${styles.loadingText} ${styles.loadingTextShort}`}
                  />
                </div>
              </div>
              <div className={styles.loadingLines}>
                <div className={styles.loadingLine} />
                <div className={styles.loadingLine} />
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className={styles.errorCard}>
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className={styles.errorTitle}>User not found</h3>
            <p className={styles.errorMessage}>{error}</p>
            <Link to="/" className={styles.errorButton}>
              Go to User List
            </Link>
          </div>
        )}

        {/* User card */}
        {user && !loading && (
          <div className={styles.card}>
            {/* Cover */}
            <div className={styles.cover}>
              <div className={styles.coverPattern} />
              <div className={styles.idBadge}>ID #{user.id}</div>
            </div>

            <div className={styles.cardBody}>
              {/* Avatar + name */}
              <div className={styles.cardHeader}>
                <div className={styles.avatarContainer}>
                  <img
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    className={styles.avatar}
                  />
                  <div className={styles.onlineBadge} />
                </div>

                <div className={styles.userInfo}>
                  <h1 className={styles.userName}>
                    {user.first_name} {user.last_name}
                  </h1>
                  <p className={styles.userEmail}>{user.email}</p>
                </div>
              </div>

              {/* Info rows */}
              <div className={styles.infoRows}>
                <div className={styles.infoRow}>
                  <div className={`${styles.infoIcon} ${styles.infoIconEmail}`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Email address</p>
                    <p className={styles.infoValue}>{user.email}</p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={`${styles.infoIcon} ${styles.infoIconUser}`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoLabel}>Full name</p>
                    <p className={styles.infoValue}>
                      {user.first_name} {user.last_name}
                    </p>
                  </div>
                </div>

                <div className={styles.infoRow}>
                  <div className={`${styles.infoIcon} ${styles.infoIconId}`}>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoLabel}>User ID</p>
                    <p className={styles.infoValue}>#{user.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
