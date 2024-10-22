import userData from '../src/components/userData.json';
import friends from '../src/friends.json';
import transction from '../src/components/transactions.json';

import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';

import styles from './App.module.css';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className={styles.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transction} />
    </div>
  );
}

export default App;