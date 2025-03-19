import React, { useState, useEffect } from "react";
import DayCell from "./DayCell";
import TaskPopup from "../task/TaskPopup";
import TaskManager from "../utils/TaskManager";

const CalendarGrid = ({ calendarDays, highlightToday, currentDate, styles }) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [selectedDay, setSelectedDay] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add a default value for currentDate in case it's not provided
  const safeCurrentDate = currentDate || new Date();
  
  // Create a unique identifier for the current month/year
  const currentMonthKey = `${safeCurrentDate.getFullYear()}-${safeCurrentDate.getMonth() + 1}`;

  // Filter tasks for the current month
  const currentMonthTasks = tasks.filter(task => {
    if (!task.year || !task.month) return false;
    return task.year === safeCurrentDate.getFullYear() && 
          task.month === safeCurrentDate.getMonth() + 1;
  });

  const handleDayClick = (day) => {
    if (day) {
      setSelectedDay(day);
      setShowPopup(true);
      setIsEditMode(false);
      setSelectedTask(null);
    }
  };

  const handleTaskClick = (task, day, event) => {
    event.stopPropagation();
    setSelectedDay(day);
    setSelectedTask(task);
    setIsEditMode(true);
    setShowPopup(true);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.grid}>
        {weekdays.map((day) => (
          <div key={day} className={styles.headerCell}>
            {day}
          </div>
        ))}

        {calendarDays.map((day, index) => (
          <DayCell
            key={`${currentMonthKey}-day-${index}-${day.day}`}
            day={day}
            dayIndex={index}
            highlightToday={highlightToday}
            onClick={handleDayClick}
            onTaskClick={(task, event) => handleTaskClick(task, day, event)}
            tasks={TaskManager.getTasksForDay(currentMonthTasks, calendarDays, day, index)}
            getDayByIndex={(idx) => calendarDays[idx] || null}
            styles={styles}
          />
        ))}
      </div>

      {showPopup && selectedDay && (
        <TaskPopup
          selectedDay={selectedDay}
          selectedTask={selectedTask}
          isEditMode={isEditMode}
          onCreate={(taskName, span, color) =>
            TaskManager.handleCreateTask(
              setTasks,
              tasks,
              selectedDay,
              isEditMode,
              selectedTask,
              taskName,
              span,
              color,
              setShowPopup,
              safeCurrentDate
            )
          }
          onDelete={() =>
            TaskManager.handleDeleteTask(
              setTasks,
              tasks,
              selectedTask,
              setShowPopup,
              setSelectedTask,
              setIsEditMode
            )
          }
          onClose={() => {
            setShowPopup(false);
            setSelectedTask(null);
            setIsEditMode(false);
          }}
          availableColors={TaskManager.taskColors}
        />
      )}
    </div>
  );
};

export default CalendarGrid;