// TimezoneDisplay.js
import React, { useState } from "react";
import moment from "moment-timezone";

const TimezoneDisplay = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("UTC");
  const [currentTime, setCurrentTime] = useState(
    moment().tz(selectedTimezone).format("YYYY-MM-DD HH:mm:ss")
  );

  const handleTimezoneChange = (e) => {
    const newTimezone = e.target.value;
    setSelectedTimezone(newTimezone);
    setCurrentTime(moment().tz(newTimezone).format("YYYY-MM-DD HH:mm:ss"));
  };

  return (
    <div className="my-2">
      <h1>
        Timezone {selectedTimezone}: {currentTime}
      </h1>
      <select
        className="w-9/12"
        value={selectedTimezone}
        onChange={handleTimezoneChange}
      >
        <option value="UTC">UTC</option>
        <option value="Asia/Kolkata">Indian Standard Time (IST)</option>
      </select>
    </div>
  );
};

export default TimezoneDisplay;
