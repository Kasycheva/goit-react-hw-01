import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardtop}>
        <div className={styles.img}>
          <img src={image} alt="User avatar" />
        </div>
        <p className={styles.username}>{name}</p>{' '}
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.category}>Followers</span>
          <span className={styles.stat}>{stats.followers}</span>
        </li>
        <li className={`${styles.item} ${styles.itemborder}`}>
          <span className={styles.category}>Views</span>
          <span className={styles.stat}>{stats.likes}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.category}>Likes</span>
          <span className={styles.stat}>{stats.views}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
