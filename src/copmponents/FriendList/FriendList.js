import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css'
import Friend from './Friend/Friend'



function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => ( 
        <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired
};

export default FriendList