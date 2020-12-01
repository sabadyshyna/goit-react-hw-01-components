import Profile from './copmponents/Profile/Profile'
import StatisticsSection from './copmponents/Statistics/StatisticsSection'
import StatisticsContainer from './copmponents/Statistics/StatisticsContainer'
import FriendList from './copmponents/FriendList/FriendList'
import TransactionHistory from './copmponents/TransactionHistory/TransactionHistory'
import user from './data/user.json'
import statisticalData from './data/statistical-data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'
import AppContainer from './copmponents/AppContainer/AppContainer'

export default function App() {
  return (
    <AppContainer>
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

      <FriendList items={friends} />
      
      <TransactionHistory items={transactions} />

    </AppContainer>
  )
}
