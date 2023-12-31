import user from '../data/user.json'
import statistics from '../data/statistics.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '20px 0'
      }}
    >
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location} 
        avatar={user.avatar} 
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />
      <Statistics stats={statistics} />

      <FriendList friends={friends}/>

      <TransactionHistory items={transactions}/>
    </div>
  );
};
