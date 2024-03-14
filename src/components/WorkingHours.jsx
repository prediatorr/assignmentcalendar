// WorkingHours.js

import React, { useState, useEffect } from "react";
import dummyData from "../assets/data.json";

const TimezoneCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="">
      <input
        className="form-checkbox border-blue-500 focus:border-blue-500 checked:border-green-500"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

const WorkingHours = ({ weekData }) => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [];

  for (let hour = 8; hour <= 22; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  const [selectedTimes, setSelectedTimes] = useState({});

  useEffect(() => {
    // Initialize selectedTimes state based on weekData
    const initialSelectedTimes = {};
    weekdays.forEach((day) => {
      initialSelectedTimes[day] = {};
      timeSlots.forEach((time) => {
        initialSelectedTimes[day][time] = false; // Initialize all times as unchecked
      });
    });

    // Update selectedTimes based on weekData
    weekData.forEach((item) => {
      const date = new Date(item.Date);
      const day = weekdays[date.getDay()];
      const time = item.Time;
      if (initialSelectedTimes[day]) {
        initialSelectedTimes[day][time] = true; // Set the corresponding time as checked
      }
    });

    setSelectedTimes(initialSelectedTimes);
  }, [weekData]);

  const handleTimeChange = (day, time, checked) => {
    setSelectedTimes((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [time]: checked,
      },
    }));
  };

  return (
    <div>
      {weekdays.map((day) => (
        <div className="flex flex-wrap" key={day}>
          <table className="table-fixed">
            <tbody>
              <tr>
                <td className="w-36 ">
                  <h3 className="m-2">{day}</h3>
                </td>
                <td>
                  <div className="w-3/4">
                    {timeSlots.map((time) => (
                      <TimezoneCheckbox
                        key={`${day}-${time}`}
                        label={time}
                        checked={selectedTimes[day]?.[time] || false}
                        onChange={(e) =>
                          handleTimeChange(day, time, e.target.checked)
                        }
                      />
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default WorkingHours;
