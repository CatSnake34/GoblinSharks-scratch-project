import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";
import '../css/inputs.css';
import { message } from "antd";

const EventMaker = props => {
  const [activity, setActivity] = useState('No activity listed.'); // take a default value: maybe 'new activity'? 
  const [startDate, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(new Date().getTime());
  const [description, setDescription] = useState('No details provided.'); // take a default value: maybe 'No details provided'?

  const { userCurrentEvents, setUserCurrentEvents, userID} = props;

  const addEvent = async (values) => {
    try {
      const response = await axios.post('/event/postEvent',{
        activity: activity,
        startDate: startDate,
        startTime: startTime,
        endTime: endTime,
        description: description,
        id: userID
      });
      message.success("Event created successfully")
      setUserCurrentEvents([...userCurrentEvents, response]);
      console.log(response);
  } catch (error) {
    console.log('error in making events function')
  }
  }

  return (
    <div className='event-maker-main'>
      <h1>Time to Host an Event!</h1>
      <div className = "event-maker-input">
        <label htmlFor="activity">Activity </label>
        <select name='activity' id="activity" onChange={e => setActivity(e.target.value)}>
          <option></option>
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
          <label htmlFor="startTime">Select Start Time </label>
          <input className='start-time-input' type="time" onChange={e => setStartTime(e.target.value)}/>
        </div>

        <div className='label-and-picker-container'>
          <label htmlFor="endTime">Select End Time </label>
          <input className='start-time-input' type="time" onChange={e => setEndTime(e.target.value)}/>
        </div>
        
        <label htmlFor="description">Description </label>
        <input name="description" id="description-input" type="text" onChange={e => setDescription(e.target.value)}
          placeholder="Write a simple description of your event..">
        </input>

        <button onClick={addEvent}>Host Event</button>
      </div>
    </div>
  )
}


export default EventMaker;



{/* 
  You can combine date and time into one DatePicker but you will need to parse string.
  To style the DatePicker itself, you need to import the required css file (the one imported at top already)
  And override it with your own styling. 

  This is code using react date picker. Switching to native date picker and time picker for easy string parsing for now.
  <div className='label-and-picker-container'> 
    <label htmlFor="date">Select a Date </label>
    <DatePicker name="date" selected={startDate} onChange={(date) => setDate(date)} />
  </div>

  <div className='label-and-picker-container'>
    <label htmlFor="startTime">Select Start Time </label>
    <DatePicker name="startTime" selected={startTime} onChange={(time) => setStartTime(time)}
      showTimeSelect showTimeSelectOnly timeIntervals={15} dateFormat="h:mm aa"/>
  </div>

  <div className='label-and-picker-container'>
    <label htmlFor="endTime">Select End Time </label>
    <DatePicker name="endTime" selected={endTime} onChange={(time) => setEndTime(time)}
      showTimeSelect showTimeSelectOnly timeIntervals={15} dateFormat="h:mm aa"/>
  </div>
  */}