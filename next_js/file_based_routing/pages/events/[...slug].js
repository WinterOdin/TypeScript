import {useRouter} from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import {Fragment} from 'react';
import Button from '../../components/ui/button';

function FilteredSlugPage(){

    const router = useRouter();
    const filteredData = router.query.slug;

    if(!filteredData){
        return (

            <Fragment>
                <p className='center'>
                No components found...
                </p>
                <div className='center'>
                    <Button link='/events'> Show all events</Button>
                </div>
            </Fragment>
            
        )
    }

    const filteredYear = +filteredData[0];
    const filteredMonth = +filteredData[1];
  
    
    if(isNaN(filteredYear) || isNaN(filteredMonth) || filteredMonth < 1 || filteredMonth > 12){
        return (
            <Fragment>
              <p className='center'>
                  Invalid url data
              </p>
              <div className='center'>
                <Button link='/events'> Show all events</Button>
              </div>
            </Fragment>
        )
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth,
    });
   
    
    if(!filteredEvents || filteredEvents.length === 0){
        return (<p>No data was found</p>)
    }

    const date = new Date(filteredYear, filteredMonth -1);


    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
            
        
    );
}

export default FilteredSlugPage;