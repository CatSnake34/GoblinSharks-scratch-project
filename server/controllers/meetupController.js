const db  = require('../models/meetupModel');


const meetUpController ={};

meetUpController.getCurrentEvents = async (req, res, next) => {
  try {
    const user_id = req.body.user_id;
    const sqlQuery = `SELECT Users._id, Events.date, Events.starttime, Events.endtime, Events.title, Events.description, Users.fullname FROM Events LEFT JOIN users ON Events.user_id=Users._id WHERE date >= CURRENT_DATE AND user_id=${user_id}`;
    const currentEvents = await db.query(sqlQuery);
    res.locals.currentEvents = currentEvents.rows;
    return next();
  }
  catch {
    console.log('caught something in getCurrentEvents');
    return next('could not get current events');
  }
}

meetUpController.getPastEvents = async (req, res, next) => {
  try {
    const user_id = req.body.user_id; // or whatever the key will be
    const sqlQuery = `SELECT Users._id, Events.date, Events.starttime, Events.endtime, Events.title, Events.description, Users.fullname FROM Events LEFT JOIN users ON Events.user_id=Users._id WHERE date < CURRENT_DATE AND user_id=${user_id}`; 
    const pastEvents = await db.query(sqlQuery);
    res.locals.pastEvents = pastEvents.rows; 
    return next(); 
  }
  catch {
    console.log('caught something in getPastEvents');
    return next('could not get past events'); 
  }
}

meetUpController.getEvents = async (req, res, next) => {
  try {
    const { startDate, activity, time } = req.body; // might be req.body.
    console.log(req.body); 
    // assumes no null values -> default values must be supplied in FE if null. 
    const sqlQuery = `SELECT Users._id, Events.date, Events.starttime, Events.endtime, Events.title, Events.description, Users.fullname FROM Events LEFT JOIN users ON Events.user_id=Users._id WHERE date='${startDate}' AND title='${activity}' AND ('${time}' >= startTime AND '${time}' < endTime)`; 
    const events = await db.query(sqlQuery);
    res.locals.events = events.rows;
    return next(); 
  }
  catch {
    console.log('caught something in getEvents');
    return next('could not get events');
  }
}

meetUpController.postEvent = async (req, res, next) => {
  try {

    let { activity, startDate, startTime, endTime, description, id } = req.body; 
    const params = [startTime, endTime, activity, description, startDate, id];
    console.log(params); 
    const sqlQuery = `
      INSERT INTO Events (startTime, endTime, title, description, date, user_id)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *; 
    `; 
    const createdEvent = await db.query(sqlQuery, params); 
    res.locals.createdEvent = createdEvent.rows; 
    return next(); 
  }
  catch {
    console.log('caught something in postEvents');
    return next({err: 'could not post the event'});
  }
}


/*
meetUpController.allMeetups = (req, res, next) => {

    const sqlQuerie = 'SELECT * FROM meetups ';
    db.query(sqlQuerie)
    .then(data => {
        console.log('data: ', data);
        res.locals.data = data.rows;
        return next();
    })
    .catch(err=>({error: err}))
}

meetUpController.allUserEntries = (req, res, next) => { // query using SSID = user_id

  const {username} = req.query;

  const sqlQuerie = 'SELECT * FROM meetups WHERE username = $1';
  let params = [username];
  db.query(sqlQuerie, params)
  .then(data => {
      console.log('data: ', data);
      res.locals.data = data.rows;
      return next();
  })
  .catch(err=>({error: err}))
}


//create get request for matches
meetUpController.meetupWithMatch = (req, res, next) => {
  console.log('started meetUpController.meetupWithMatch')
  const {activity, day, username} = req.query;
  let queryParams;
  let query;

  // i want coffee on saturday (specific)
  if (day && activity ) {
    console.log('picked both')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1 AND meetups.day = $2 AND meetups.username <> $3`;
    queryParams = [activity, day, username];
  }
  
  // i want just saturday
  if (day && !activity) {
    console.log('picked day only')
    query = `SELECT * FROM meetups WHERE meetups.day = $1 AND meetups.username <> $2`;
    queryParams = [day, username];
  }
  // i want just coffee
  if (!day && activity) {
    console.log('picked activity only')
    query = `SELECT * FROM meetups WHERE meetups.activity = $1 AND meetups.username <> $2`;
    queryParams = [activity, username];
  }
  
  // run db search 
  db.query(query, queryParams)
  .then(data => {
      console.log('data.rows: ', data.rows);
      res.locals.data = data.rows;
      return next();
  })
  .catch(err=>(next({error: err})))
}


meetUpController.newEntry = (req, res, next) => {
    console.log("req.body:", req.body)
    const {username, first_name, last_name, activity, day} = req.body;
    let newDate = new Date();
    const query = 'INSERT INTO meetups (username, first_name, last_name, activity, day, created_at) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
    const queryParams = [username, first_name, last_name, activity, day, newDate];

    db.query(query, queryParams)
    .then(data => {
      console.log('data.rows: ', data.rows);
      // res.locals.data = data.rows;
      return next();
    })
    .catch(err => (next(err)))
    // return next();
}
*/
module.exports = meetUpController;

