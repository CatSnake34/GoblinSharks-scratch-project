import React from 'react';
import Event from './Event'

const EventsDisplay = (props) => {
    const {eventsData} = props;

    // if (!eventsData.length) return (
    //     <div>Sorry, no events planned yet!</div>
    // );

    return (
        <div className = "EventsDisplay">
            {
                eventsData.map((event) => (
                    <Event event = {event}/>
                ))
            }
        </div>
    )
}

export default EventsDisplay;