import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import React from 'react';
import Event from './Event'

const ProfilePastEventsDisplay = props => {
    // TO DO: RENDER PAST EVENTS FROM PASSED DOWN PROPS
    const {userPastEvents} = props;

    // if (!userPastEvents.length) return (
    //     <div>Sorry, no events planned yet!</div>
    // );

    // const pastEvents = eventsData.filter(
    //     (event) => event.date < Date.now()
    // )

    return (

        <div className = "EventsDisplay">
            <h1>Past Events</h1>
            {
                userPastEvents.map((event) => (
                    <Event event = {event}/>
                ))
            }
        </div>
    )
}

export default ProfilePastEventsDisplay;