// DateDisplay.js
import React, { useState } from "react";

const DateDisplay = ({ setWeekStartDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const moveWeek = (direction) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      direction === "forward"
        ? newDate.setDate(newDate.getDate() + 7)
        : newDate.setDate(newDate.getDate() - 7);
      setWeekStartDate(newDate); // Update the parent component's state
      return newDate;
    });
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-between">
      <button onClick={() => moveWeek("backward")}> {"<"} Previous Week</button>
      <h1>{formatDate(currentDate)}</h1>
      <button onClick={() => moveWeek("forward")}>Next Week {">"}</button>
    </div>
  );
};

export default DateDisplay;
