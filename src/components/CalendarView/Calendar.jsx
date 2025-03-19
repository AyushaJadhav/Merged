import React from "react";
import { useCalendarStyles } from "./CalendarStyles";
import CalendarHeader from "./header/CalendarHeader";
import CalendarGrid from "./grid/CalendarGrid";
import useCalendar from "./hooks/useCalendar";
import users from "./data/users.js";


const Calendar = () => {
  const styles = useCalendarStyles();
  const { currentDate, calendarDays, goToToday, goToPreviousMonth, goToNextMonth } = useCalendar();

  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarContainer}>
        <CalendarHeader
          users={users}
          currentDate={currentDate}
          goToToday={goToToday}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />

        <CalendarGrid
          calendarDays={calendarDays}
          highlightToday={true}
          currentDate={currentDate}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default Calendar;