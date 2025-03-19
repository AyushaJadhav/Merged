import React from "react";
import { Button } from "@fluentui/react";
import { useCalendarStyles } from "../CalendarStyles";

const MonthSwitcher = ({ currentDate, goToPreviousMonth, goToNextMonth }) => {
  const styles = useCalendarStyles(); // Get styles

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className={styles.monthSwitcher}>
      <Button className={styles.switcherButton} onClick={goToPreviousMonth}>
        {"<"}
      </Button>
      <span className={styles.switcherLabel}>{monthName}</span>
      <Button className={styles.switcherButton} onClick={goToNextMonth}>
        {">"}
      </Button>
    </div>
  );
};

export default MonthSwitcher;
