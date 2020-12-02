import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'

import user from '../data/user.json'
import statisticalData from '../data/statistical-data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'

import AppContainer from './AppContainer/AppContainer'

export default function App() {
  return (
    <AppContainer>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatarUrl={user.avatar}
        stats={user.stats}
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />

    </AppContainer>
  )
}
