import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css'

const Profile = ({ name, tag, location, avatarUrl, followers, views, likes }) => {
  return (
    <div className={s.profile}>
        <div className={s.description}>
        <img
          src={avatarUrl}
          alt="Аватар пользователя"
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
        </ul>
    </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;

