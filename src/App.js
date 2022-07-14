import React, { useState } from 'react'
import moment from 'moment';
import './App.css'

const App = () => {
  let intime = "12:00 Pm"
  let outtime = "08:00 Pm"
  const [result, setResult] = useState([])
  console.log("Array", result)

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(15, 'minutes');
      }
    }


    return result;
  }

  intervals(intime, outtime);
  return (
    <div className='slots'>
      {
        result && result.length > 0 ? result.map((time, index) => {
          return (
            <div key={index}>
              <p>{time}</p>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default App