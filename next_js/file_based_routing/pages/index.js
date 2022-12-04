import {getFeaturedEvents} from '../helpers/api-utils';
import EventList from '../components/events/event-list';

function HomePage(props){

    
    return (
        
        <div>
            <h1>Featured Events</h1>

            <div>
                <EventList items={props.featuredEvents}/>
            </div>
        </div>

    );
}

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents()
    return {
        props: {
            featuredEvents:featuredEvents
        }
    }
}


export default HomePage;