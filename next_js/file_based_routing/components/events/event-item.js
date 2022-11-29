import Link from 'next/link';
import classes from './event-item.module.css';
import Button from '../ui/button';

function EventItem(props){

    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddres = location;
    const exploreLink = `/events/${id}`

    return <li className={classes.item}>
        <img src={'/' + image } alt={title}/>
        <div className={classes.content}>
            <div className={classes.summary}>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <time>{formattedAddres}</time>
                </div>
                <div className={classes.address}>
                    <address>{formattedAddres}</address>
                </div>
            </div>
            <div className={classes.action}>
                <Button link={exploreLink}>
                    Explore Events
                </Button>
            </div>
        </div>
    
    </li>

}

export default EventItem;