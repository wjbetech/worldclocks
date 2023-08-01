import { useState, useEffect } from 'react'
import { DateTime } from "luxon"

const Clocks = ({ timeZone, label, region }) => {

  const getTime = () => DateTime.local().setZone(timeZone).toFormat('HH:mm:ss')
  const [currentTime, setCurrentTime] = useState(getTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock-card">
      <h2>{label}</h2>
      <p className="region">{region}</p>
      <p>{currentTime}</p>
    </div>
  )
}

export default Clocks
