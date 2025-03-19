// TodayButton.jsx
import React from 'react';
import { Button } from "@fluentui/react";
import { useCalendarStyles } from '../CalendarStyles';

const TodayButton = ({ goToToday }) => {
  const styles = useCalendarStyles();

  return (
    <Button 
      appearance="subtle"
      onClick={goToToday}
      size="small"
      className={styles.todayButton}
    >
      Today
    </Button>
  );
};

export default TodayButton;