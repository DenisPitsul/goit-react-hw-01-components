import { FriendItem } from 'components/FriendItem/FriendItem'
import classes from './FriendList.module.css'

export const FriendList = ({friends}) => (
    <ul className={classes.friendList}>
        {
            friends.map(friend => 
                <FriendItem 
                    key={friend.id} 
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            )
        }
    </ul>
)