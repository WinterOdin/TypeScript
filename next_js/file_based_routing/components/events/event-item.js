import Link from 'next/link';

function EventItem(props){

    const {title, image, date, location, id} = props;
    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddres = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`

    return <li>
        <img src={'/' + image } alt={title}/>
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{formattedAddres}</time>
                </div>
                <div>
                    <address>{formattedAddres}</address>
                </div>
            </div>
            <div>
                <Link href="/">Explore Events</Link>
            </div>
        </div>
    
    </li>

}

export default EventItem;