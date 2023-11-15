import classes from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats}) => (
    <div className={classes.profile}>
        <div className={classes.description}>
            <img
                src={avatar}
                alt={avatar.username}
                className={classes.avatar}
            />
            <p className={classes.name}>{username}</p>
            <p className={classes.tag}>@{tag}</p>
            <p className={classes.location}>{location}</p>
        </div>

        <ul className={classes.stats}>
            <li>
                <span className={classes.label}>Followers</span>
                <span className={classes.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={classes.label}>Views</span>
                <span className={classes.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={classes.label}>Likes</span>
                <span className={classes.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
)