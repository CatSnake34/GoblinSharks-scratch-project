import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
import axios from 'axios';
import "antd/dist/antd.css";
import './css/styles.css'
import Navbar from "./components/Navbar.jsx"
import Home from './components/Home.jsx';
import EventsContainer from './containers/EventsContainer.jsx';
import ProfileContainer from './containers/ProfileContainer.jsx'
import EventMaker from './components/EventMaker.jsx';
import LoginSignup from "./components/LoginSignup.jsx";


const App = () => {
  // NOTE: Do we need to store anything else from userTable besides ID?
  const [userID, setUserID] = useState('');
  /*
    loggedIn: a state that is used to check what to render in app: The LoginSignup Component Or our main App?
    loggedIn state is passed to the LoginSignup Component. It sets loggedIn to true on sucessful
    login or sign up. 
    
    userEvents: a state that is used to store all the user's events. This state is created at the top level so 
    both ProfileContainer and EventsMaker will have access to it. 
      ProfileContainer needs the userEvents state so that it can render all the events that a 
      user has made. 
      EventsMaker needs the setUserEvents state-setter-method to be able to update the 
      userEvents state once a new event is created.
  */
  const [loggedIn, setLoggedIn] = useState(document.cookie.length > 0);
  // const [userEvents, setUserEvents] = useState([]);


  // const getCurrentEvents = async () => {
  //   try {
  //     const { data } = await axios.post('/event/currentEvents', {user_id: userID});
  //     setUserCurrentEvents(data);
  //     console.log('currentevents:', data)
  //   } catch(err) {
  //     console.log('Sorry there was an error retrieving your current events.');
  //   }
  // } 

  // const getPastEvents = async () => {
  //   try {
  //     const { data } = await axios.post('/event/pastEvents',  {user_id : userID});
  //     setUserPastEvents(data);
  //     console.log('pastevents: ', data);
  //   } catch(err) {
  //     console.log('Sorry there was an error retrieving your past events.');
  //   }
  // } 

  // useEffect(() => {
  //   if(loggedIn) {  
  //     getCurrentEvents();
  //     getPastEvents();
  //   }
  //   },[loggedIn]
  // ); 

  useEffect(() => {
    setLoggedIn(document.cookie.length > 0);
    if(loggedIn) {
      setUserID(document.cookie.slice(document.cookie.indexOf('=') + 1));
    } 
  }, [])
 
  //If logged in render Navbar and router
  if(loggedIn){
    return ( 
      <div className = "App">
          <HashRouter>
            <Navbar />
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/me" element = {<ProfileContainer userID={userID} setUserID={setUserID}/>}/>
                <Route path = "/findEvents" element = {<EventsContainer/>}/>
                <Route path = "/hostEvents" element = {<EventMaker userID={userID}/>}/>
            </Routes>
          </HashRouter>
      </div> )
  } // If not logged in render the LoginSignup component
  else {
    return (
      <div className = "App">
        <LoginSignup loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUserID={setUserID} />
      </div>
    )
  }
}

export default App;


