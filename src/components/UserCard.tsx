import { Link } from "react-router-dom";
import type { User } from "../types";
import styles from "./UserCard.module.css";

interface UserCardProps {
  user: User;
  index: number;
}

const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className={styles.cardLink}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.avatarContainer}>
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className={styles.avatar}
            />
            <div className={styles.onlineBadge}></div>
          </div>

          <div className={styles.userInfo}>
            <p className={styles.userName}>
              {user.first_name} {user.last_name}
            </p>
            <p className={styles.userEmail}>{user.email}</p>
          </div>

          <div className={styles.arrowContainer}>
            <svg
              className={styles.arrowIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        <div className={styles.cardFooter}>
          <span className={styles.userId}>ID #{user.id}</span>
          <span className={styles.viewProfileBadge}>View Profile →</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
