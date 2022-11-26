import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/events/event-list';

function HomePage(){

    const featuredData = getFeaturedEvents();
    return (
        
        <div>
            <h1>Featured Events</h1>

            <div>
                <EventList items={featuredData}/>
            </div>
        </div>

    );
}

export default HomePage;