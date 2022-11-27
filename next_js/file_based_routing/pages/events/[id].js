import {useRouter} from 'next/router';
import { getEventById } from '../../dummy-data';


function IndividualEventPage(){

    const router = useRouter();
    const eventID = router.query.id;
    const event = getEventById(eventID)

    if(!event){
        return <p>No event found!</p>
    }
    
    return (
            <div><h1>Individual Event page</h1></div>
    );
}

export default IndividualEventPage;