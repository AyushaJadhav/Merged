import React, { useState } from "react";
import clsx from "clsx"; // Import clsx
import { useCalendarStyles } from "../CalendarStyles";
import TaskDialog from "../task/TaskDialog";

const DayCell = ({ day, dayIndex, highlightToday, onClick, onTaskClick, tasks }) => {
  const styles = useCalendarStyles();
  const isHighlighted = highlightToday && day.isToday;
  const cellPosition = dayIndex % 7;
  const [showAllTasks, setShowAllTasks] = useState(false);

  const visibleTasks = tasks.slice(0, 2);
  const maxVerticalPosition = visibleTasks.length > 0
    ? Math.max(...visibleTasks.map(task => task.verticalPosition))
    : -1;
  const moreButtonTopPosition = `${(maxVerticalPosition + 1) * 20 + 2}px`;

  return (
    <div
      className={clsx(styles.dayCell, day.isPrevMonth && styles.prevMonthDay)}  // Updated here
      onClick={() => onClick(day)}
      style={{ cursor: "pointer", position: "relative" }}
    >
      <div className={styles.dayNumber}>
        {day.day}
        {isHighlighted && <div className={styles.todayCircle}></div>}
      </div>

      {/* Task bars */}
      <div className={styles.taskContainer} style={{ position: "relative" }}>
        {tasks.slice(0, 2).map((task) => {
          const isStartCell = cellPosition === task.rowStartPosition;
          const isEndCell = cellPosition === task.rowStartPosition + task.rowSpan - 1;

          let borderRadius = "0";
          if (isStartCell && isEndCell) borderRadius = "4px";
          else if (isStartCell) borderRadius = "4px 0 0 4px";
          else if (isEndCell) borderRadius = "0 4px 4px 0";

          const marginLeft = isStartCell ? "0" : "-1px";
          const marginRight = isEndCell ? "0" : "-1px";
          const width = `calc(100% + 2px)`;
          const topPosition = `${task.verticalPosition * 20}px`;

          return (
            <div
              key={`${task.segmentId}-pos-${cellPosition}`}
              className={styles.taskBar}
              onClick={(e) => {
                e.stopPropagation();
                onTaskClick(task, e);
              }}
              style={{
                width,
                backgroundColor: task.color || "blue",
                padding: "2px",
                borderRadius,
                color: "#13280d",
                fontSize: "12px",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginLeft,
                marginRight,
                position: "absolute",
                top: topPosition,
                left: 0,
                height: "18px",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              {task.isFirstSegment && cellPosition === task.rowStartPosition ? task.name : ""}
            </div>
          );
        })}

        {/* +X more button */}
        {tasks.length > 2 && (
          <div
            className={styles.taskBar}
            onClick={(e) => {
              e.stopPropagation();
              setShowAllTasks(true);
            }}
            style={{
              width: "calc(100% + 2px)",
              backgroundColor: "#252b30",
              padding: "2px",
              borderRadius: "4px",
              color: "#b7bdc1",
              fontSize: "12px",
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              position: "absolute",
              top: moreButtonTopPosition,
              left: 0,
              height: "18px",
              zIndex: 1,
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            +{tasks.length - 2} more
          </div>
        )}
      </div>

      {/* Task Dialog */}
      {showAllTasks && (
        <TaskDialog
          open={showAllTasks}
          onClose={() => setShowAllTasks(false)}
          tasks={tasks}
          day={day}
          onTaskClick={onTaskClick}
        />
      )}
    </div>
  );
};

export default DayCell;
