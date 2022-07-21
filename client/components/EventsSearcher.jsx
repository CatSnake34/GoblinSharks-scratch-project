import React, {useState} from 'react';
import '../css/inputs.css';
import axios from 'axios';
import { message } from "antd";

const EventsSearcher = props => {
    const { setEventsData } = props;
    
    const [activity, setActivity] = useState('');
    const [startDate, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().getTime());
    
    //function to run when button is clicked
    const getEventsData = async () => {
      try {
        const response = await axios.post('/event/getEvents',{
              activity: activity,  
              startDate: startDate,
              time: time
        });
        if (!response.data.length) message.error('Sorry, no events found!')
        setEventsData(response.data);
      } catch (error) {
          console.log('error in searching for events function')
      }
    }

    return (

      <div className='event-maker-main'>
      <h1>Time to Find an Event!</h1>
      <div className = "event-maker-input">
        <label htmlFor="activity">Activity </label>
        <select name='activity' id="activity" onChange={e => setActivity(e.target.value)}>
          <option value={'climbing'}>climbing</option>
          <option value={'hiking'}>hiking</option>
          <option value={'yoga'}>yoga</option>
          <option value={'exercising'}>exercising</option>
          <option value={'coffee'}>coffee</option>
          <option value={'beer'}>beer</option>
          <option value={'cocktails'}>cocktails</option>
          <option value={'other beverage'}>other beverage</option>
          <option value={'gym'}>gym</option>
          <option value={'dinner'}>dinner</option>
          <option value={'street fighting'}>street fighting</option>
        </select><br></br>
  
        <div className='label-and-picker-container'> 
            <label htmlFor="date">Select a Date </label>
            <input className='date-input' type="date" onChange={e => setDate(e.target.value)} />
        </div>
        
        <div className='label-and-picker-container'>
          <label htmlFor="startTime">Select Time </label>
          <input className='start-time-input' type="time" onChange={e => setTime(e.target.value)}/>
        </div>

        <button onClick={getEventsData}>Find Events</button>
      </div>
    </div>
    )
}

export default EventsSearcher;