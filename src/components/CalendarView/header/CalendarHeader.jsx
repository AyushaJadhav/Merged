import React from "react";
import { useCalendarStyles } from "../CalendarStyles";
import AvatarGroupComponent from "./AvatarGroup";
import TodayButton from "./TodayButton";
import MonthSwitcher from "./MonthSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const CalendarHeader = ({ users, currentDate, goToToday, goToPreviousMonth, goToNextMonth }) => {
  const styles = useCalendarStyles();

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <AvatarGroupComponent users={users} />
      </div>

      {/* This div ensures MonthSwitcher is visible */}
      <div className={styles.headerCenter} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <MonthSwitcher
          currentDate={currentDate}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
      </div>

      <div className={styles.headerRight}>
        <TodayButton goToToday={goToToday} />
        <ThemeSwitcher />
      </div>
      
    </div>
  );
};

export default CalendarHeader;
