import Profile from './copmponents/Profile/Profile';
import StatisticsSection from './copmponents/Statistics/StatisticsSection';
import StatisticsContainer from './copmponents/Statistics/StatisticsContainer'
import FriendList from './copmponents/FriendList/FriendList';
// import TransactionHistory from './copmponents/TransactionHistory/TransactionHistory';
import user from './user.json'
import statisticalData from './statistical-data.json'
import friends from './friends.json'



export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <StatisticsContainer title="Upload stats">
        <StatisticsSection items={statisticalData} />
      </StatisticsContainer>

      <FriendList items={friends}/>

    </div>
  );
}
