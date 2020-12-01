import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css'

const Friend = ({avatar, name, isOnline}) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
    <img className={s.avatar} src={avatar} alt="{name}" width="48" />
    <p className={s.name}>{name}</p>
    </li>
  )
}

function FriendList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(item => ( 
        <Friend
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList