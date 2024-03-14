import React, { useState,useEffect } from "react";
import DateDisplay from "./components/DateDispay";
import TimezoneDisplay from "./components/TimezoneDisplay";
import WorkingHours from "./components/WorkingHours";
import dummyData from "./assets/data.json";

function App() {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [weekData, setWeekData] = useState([]);

  // Function to fetch data for the current week
  const fetchDataForWeek = () => {
    // Calculate the start and end dates of the current week
    const startDate = new Date(weekStartDate);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);

    // Filter data for the current week
    const filteredData = dummyData.filter(item => {
      const itemDate = new Date(item.Date);
      return itemDate >= startDate && itemDate <= endDate;
    });

    setWeekData(filteredData);
  };

  // Update weekData when weekStartDate changes
  useEffect(() => {
    fetchDataForWeek();
  }, [weekStartDate]);

  return (
    <div className="m-4">
      <DateDisplay setWeekStartDate={setWeekStartDate} />
      <TimezoneDisplay />
      <WorkingHours weekData={weekData} />
    </div>
  );
}

export default App;
