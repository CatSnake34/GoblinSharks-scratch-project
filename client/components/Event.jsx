import React from 'react';

const Event = ({event}) => {


    return (
        <div className = "Event">
            Activity: <p>{event.title} with {event.fullname}</p>
            Date: <p>{event.date?.slice(0, 10)}</p>
            Start Time: <p>{event.starttime}</p>
            End Time: <p>{event.endtime}</p>
            Description: <p>{event.description}</p>
        </div>
    )
}

export default Event;