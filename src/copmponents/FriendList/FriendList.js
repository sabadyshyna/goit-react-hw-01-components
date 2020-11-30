import PropTypes from 'prop-types';

const Friend = ({avatar, name, isOnline}) => {
  return (
    <li className="item">
    <span className="status"></span>
    <img className="avatar" src={avatar} alt="{name}" width="48" />
    <p className="name">{name}</p>
    </li>
  )
}

function FriendList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(item => ( 
        <Friend
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            // isOnline={item.isOnline}
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