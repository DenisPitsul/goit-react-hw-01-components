import classes from './FriendItem.module.css'

export const FriendItem = ({avatar, name, isOnline}) => (
    <li className={classes.item}>
        <span className={isOnline ? classes.statusOnline : classes.statusOffline}></span>
        <img className={classes.avatar} src={avatar} alt={name} width="48" />
        <p className={classes.name}>{name}</p>
    </li>
)