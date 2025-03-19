import React, { useState, useEffect } from "react";
import { Button } from "@fluentui/react";
import TaskPopupStyles from "./taskPopupStyles";

const TaskPopup = ({ selectedDay, selectedTask, isEditMode, onCreate, onDelete, onClose, availableColors, tasks }) => {
  const [taskName, setTaskName] = useState("");
  const [taskSpan, setTaskSpan] = useState(1);
  const [taskColor, setTaskColor] = useState("");
  const [showAllTasks, setShowAllTasks] = useState(false);

  useEffect(() => {
    
    
    // Initialize form with task data if in edit mode
    if (isEditMode && selectedTask) {
      setTaskName(selectedTask.name);
      setTaskSpan(selectedTask.span);
      setTaskColor(selectedTask.color || availableColors[0]);
    } else {
      setTaskName("");
      setTaskSpan(1);
      setTaskColor(availableColors[0]);
    }
  }, [selectedDay, selectedTask, isEditMode, availableColors]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim()) {
      onCreate(taskName, taskSpan, taskColor);
      setTaskName("");
      setTaskSpan(1);
      setTaskColor(availableColors[0]);
    }
  };

  return (
    <div style={TaskPopupStyles.popupOverlay} onClick={onClose}>
      <div style={TaskPopupStyles.popupBox} onClick={(e) => e.stopPropagation()}>
        <h3>{isEditMode ? `Edit Task` : `Create Task for Day ${selectedDay?.day}`}</h3>

        <form onSubmit={handleSubmit}>
          <input
            style={TaskPopupStyles.inputField}
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Task Name"
            required
          />

          <input
            style={TaskPopupStyles.inputField}
            type="number"
            value={taskSpan}
            onChange={(e) => setTaskSpan(Number(e.target.value))}
            placeholder="Days"
            min="1"
          />

          <div>
            <label>Color:</label>
            <div style={TaskPopupStyles.colorContainer}>
              {availableColors.map((color, index) => (
                <div
                  key={`color-${index}`}
                  style={{
                    ...TaskPopupStyles.colorOption,
                    backgroundColor: color,
                    ...(color === taskColor ? TaskPopupStyles.selectedColorOption : {})
                  }}
                  onClick={() => setTaskColor(color)}
                />
              ))}
            </div>
          </div>

          <div style={TaskPopupStyles.buttonContainer}>
            {isEditMode && (
              <Button 
                type="button" 
                onClick={onDelete}
                style={TaskPopupStyles.deleteButton}
              >
                Delete
              </Button>
            )}
            <Button type="button" onClick={onClose}>Cancel</Button>
            <Button type="submit" appearance="primary">
              {isEditMode ? "Update" : "Create"}
            </Button>
          </div>
        </form>

        {tasks?.length > 2 && !showAllTasks && (
          <Button onClick={() => setShowAllTasks(true)}>+{tasks.length - 2} more</Button>
        )}
        {showAllTasks && (
          <div>
            {tasks.map((task, index) => (
              <div key={index} style={{ backgroundColor: task.color, padding: "5px", margin: "2px 0" }}>
                {task.name}
              </div>
            ))}
            <Button onClick={() => setShowAllTasks(false)}>Show Less</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskPopup;
