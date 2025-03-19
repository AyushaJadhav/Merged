import React from "react";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  PrimaryButton,
  DefaultButton
} from "@fluentui/react";

const TaskDialog = ({ open, onClose, tasks, day, onTaskClick }) => {
  return (
    <Dialog
      hidden={!open}
      onDismiss={onClose}
      dialogContentProps={{
        title: `Tasks for Day ${day.day}`,
        subText: "Click a task to view details",
      }}
    >
      <DialogContent>
        {tasks.map((task) => (
          <div
            key={task.segmentId}
            style={{
              backgroundColor: task.color || "blue",
              padding: "8px",
              margin: "5px 0",
              borderRadius: "4px",
              color: "#13280d",
              cursor: "pointer",
            }}
            onClick={(e) => {
              onTaskClick(task, e);
              onClose();
            }}
          >
            {task.name}
          </div>
        ))}
      </DialogContent>

      <DialogFooter>
        <DefaultButton onClick={onClose} text="Close" />
      </DialogFooter>
    </Dialog>
  );
};

export default TaskDialog;
