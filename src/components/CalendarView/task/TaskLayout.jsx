const TaskLayout = {
    getTasksByRow(tasks, calendarDays) {
      const taskRows = {};
      
      tasks.forEach(task => {
        const startDayIndex = calendarDays.findIndex(d => d.day === task.startDay);
        if (startDayIndex === -1) return;
        
        const startRowIndex = Math.floor(startDayIndex / 7);
        const endDayIndex = Math.min(startDayIndex + task.span - 1, calendarDays.length - 1);
        const endRowIndex = Math.floor(endDayIndex / 7);
        
        for (let rowIndex = startRowIndex; rowIndex <= endRowIndex; rowIndex++) {
          if (!taskRows[rowIndex]) {
            taskRows[rowIndex] = [];
          }
          
          let rowStartIndex = rowIndex * 7;
          let rowEndIndex = rowStartIndex + 6;
          let segmentStartIndex = Math.max(startDayIndex, rowStartIndex);
          let segmentEndIndex = Math.min(endDayIndex, rowEndIndex);
          let segmentSpan = segmentEndIndex - segmentStartIndex + 1;
          
          taskRows[rowIndex].push({
            ...task,
            rowStartPosition: segmentStartIndex % 7,
            rowSpan: segmentSpan,
            isFirstSegment: segmentStartIndex === startDayIndex,
            segmentId: `${task.id}-row-${rowIndex}`,
            originalIndex: startDayIndex
          });
        }
      });
      
      Object.keys(taskRows).forEach(rowIndex => {
        taskRows[rowIndex].sort((a, b) => a.originalIndex - b.originalIndex);
        taskRows[rowIndex].forEach((task, idx) => { task.verticalPosition = idx; });
      });
      
      return taskRows;
    },
  
    getTasksForDay(tasks, calendarDays, dayIndex) {
      const rowIndex = Math.floor(dayIndex / 7);
      const rowTaskList = TaskLayout.getTasksByRow(tasks, calendarDays)[rowIndex] || [];
      return rowTaskList.filter(task => {
        const dayPosition = dayIndex % 7;
        return dayPosition >= task.rowStartPosition && dayPosition < task.rowStartPosition + task.rowSpan;
      });
    }
  };
  
  export default TaskLayout;