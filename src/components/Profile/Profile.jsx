import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.card}>
      <div className={s.box}>
        <img className={s.userAvatar} src={image} alt="User avatar" />
        <p className={s.userName}>{name}</p>
        <p className={s.userTag}>@{tag}</p>
        <p className={s.userLocation}>{location}</p>
      </div>

      <ul className={s.userStats}>
        <li className={s.userItem}>
          <span className={s.userStatsText}>Followers</span>
          <span className={s.userStatsValue}>{followers}</span>
        </li>
        <li className={s.userItem}>
          <span className={s.userStatsText}>Views</span>
          <span className={s.userStatsValue}>{views}</span>
        </li>
        <li className={s.userItem}>
          <span className={s.userStatsText}>Likes</span>
          <span className={s.userStatsValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
