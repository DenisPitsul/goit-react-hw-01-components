import classes from './Statistics.module.css'
import { getRandomHexColor } from 'utils/random'

export const Statistics = ({title, stats}) => (
    <section className={classes.statistics}>
        {title && <h2 className={classes.title}>{title}</h2>}
        <ul className={classes.statList}>
            {
                stats.map((stat, index) => 
                    <li key={index} style={{backgroundColor: getRandomHexColor()}} className={classes.item}>
                        <span className={classes.label}>{stat.label}</span>
                        <span className={classes.percentage}>{stat.percentage}</span>
                    </li>
                )
            }
        </ul>
    </section>
)