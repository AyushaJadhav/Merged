import React, { useRef } from "react";
import { useSelector } from "react-redux";

const TaskBar = ({ epic }) => {
    console.log("Epic:", epic, "Start Date:", start, "Due Date:", due); 
  const taskRef = useRef(null);
  const epicDates = useSelector((state) => state.epicDates[selectedEpic] );
  
  const startDate = epicDates.startDate ? new Date(epicDates.startDate) : null;
  const dueDate = epicDates.dueDate ? new Date(epicDates.dueDate) : null;

  
  console.log("Epic:", epic, "Start Date:", startDate, "Due Date:", dueDate)

  if (!startDate || !dueDate) return null; 
  return (
    
    <div ref={taskRef} className="flex bg-purple-500 text-white px-2  h-6">
        
      <span>{epic}</span>
    </div>
  );
};

export default TaskBar;
