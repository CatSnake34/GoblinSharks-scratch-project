import React, { useEffect } from 'react';
import axios from 'axios';

import ProfilePictureDisplay from '../components/ProfilePictureDisplay'
import ProfileStatsDisplay from '../components/ProfileStatsDisplay'
import ProfileCurrentEventsDisplay from '../components/ProfileCurrentEventsDisplay'
import ProfilePastEventsDisplay from '../components/ProfilePastEventsDisplay'

const ProfileContainer = props => {
  const { userCurrentEvents, userPastEvents} = props;
  //TO DO: PARSE USEREVENTS INTO CURRENTEVENTS AND PASTEVENTS. THEN PAST THEM DOWN TO THE APPROPRIATE PRESENTATIONAL COMPONENT

  return (
    <div className = "ProfileContainer">
        <ProfilePictureDisplay/>
        <ProfileStatsDisplay userCurrentEvents={userCurrentEvents} userPastEvents={userPastEvents}/>
        <ProfileCurrentEventsDisplay userCurrentEvents={userCurrentEvents}/>
        <ProfilePastEventsDisplay userPastEvents={userPastEvents}/>
    </div>
  )
}

export default ProfileContainer;