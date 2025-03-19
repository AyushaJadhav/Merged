import TaskLayout from "../task/TaskLayout";

const TaskManager = {
  taskColors: ["#4287f5", "#f54242", "#42f563", "#f5a742", "#9c42f5", "#f542b3", "#42d7f5"],

  handleCreateTask(setTasks, tasks, selectedDay, isEditMode, selectedTask, taskName, span, color, setShowPopup, currentDate) 
    {
    if (!selectedDay) return;

    // Use safe defaults if currentDate is undefined
    const safeCurrentDate = currentDate || new Date();
    
    // Get the month and year from currentDate
    const year = safeCurrentDate.getFullYear();
    const month = safeCurrentDate.getMonth() + 1; // JavaScript months are 0-indexed

    if (isEditMode && selectedTask) {
      const updatedTasks = tasks.map(task => 
        task.id === selectedTask.id 
          ? { ...task, name: taskName, span, color } 
          : task
      );
      setTasks(updatedTasks);
    } else {
      const newTask = { 
        id: Date.now(), 
        name: taskName, 
        startDay: selectedDay.day, 
        span, 
        color: color || TaskManager.taskColors[Math.floor(Math.random() * TaskManager.taskColors.length)],
        year, 
        month, 
        // Store whether the day is from previous or next month
        isPrevMonth: selectedDay.isPrevMonth || false,
        isNextMonth: selectedDay.isNextMonth || false
      };
      setTasks([...tasks, newTask]);
    }
    setShowPopup(false);
  },

  handleDeleteTask(setTasks, tasks, selectedTask, setShowPopup, setSelectedTask, setIsEditMode) {
    if (selectedTask) {
      setTasks(tasks.filter(task => task.id !== selectedTask.id));
      setShowPopup(false);
      setSelectedTask(null);
      setIsEditMode(false);
    }
  },

  getTasksForDay(tasks, calendarDays, day, dayIndex) {
    // If the day is from previous or next month, don't show any tasks
    if (!day || day.isPrevMonth || day.isNextMonth) {
      return [];
    }
    
    return TaskLayout.getTasksForDay(tasks, calendarDays, dayIndex);
  }
};

export default TaskManager;