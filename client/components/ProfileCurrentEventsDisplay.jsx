import React from 'react';
import Event from './Event'
import '../css/styles.css';

const ProfileCurrentEventsDisplay = props => {
    // TO DO: RENDER CURRENT EVENTS FROM PASSED DOWN PROPS

    const {userCurrentEvents} = props;

    // if (!userCurrentEvents.length) return (
    //     <div>Sorry, no events planned yet!</div>
    // );

    return (
        <div className = "EventsDisplay">
            <h1> Current Events </h1>
            {
                userCurrentEvents.map((event) => (
                    <Event event = {event}/>
                ))
            }
        </div>
    )
}

export default ProfileCurrentEventsDisplay;