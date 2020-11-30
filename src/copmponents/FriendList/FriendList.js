import PropTypes from 'prop-types';

const Friend = ({}) => {
  return (
    <li class="item">
    <span class="status"></span>
    <img class="avatar" src="{avatar}" alt="{name}" width="48" />
    <p class="name">{name}</p>
    </li>
  )
}

function FriendList({ items }) {
  return (
    <ul>
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

StatisticsSection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList