import React, { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import Column from './Column';
import { columns } from "../constants/columns";
import { initialTasks } from '../data/initialTasks'; 
import { Dialog, DialogType, PrimaryButton, DefaultButton, useTheme } from '@fluentui/react'; // ✅ Added DefaultButton
import TaskForm from '../forms/TaskForm';

const Board = ({
  tasks,
  handleDragEnd,
  handleDeleteTask,
  addTask,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const onDragEnd = (result) => {
    if (!result.destination) return; 
    handleDragEnd(result); 
  };
 
  useEffect(() => {
    console.log('Board rendered with tasks:', tasks);
    console.log('Available columns:', columns.map(col => col.id));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    console.log('Board received new task:', newTask);
    addTask(newTask);
    setIsDialogOpen(false);
  };

  return (
    <>
      <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between' }}>
        <DefaultButton 
          text="List" 
          onClick={() => navigate('/ListView')} // ✅ Navigate to ListView
          styles={{
            root: {
              marginRight: '8px',
              borderRadius: '4px',
              backgroundColor: theme.palette.neutralLighter,
            }
          }}
        />
        
        <PrimaryButton 
          iconProps={{ iconName: 'Add' }} 
          onClick={() => setIsDialogOpen(true)}
          styles={{
            root: {
              borderRadius: '4px',
              transition: 'all 0.2s ease',
            },
            rootHovered: {
              transform: 'translateY(-2px)',
              boxShadow: theme.effects.elevation8
            },
            rootPressed: {
              transform: 'translateY(0)',
            }
          }}
        >
          Add Task
        </PrimaryButton>
      </div>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ display: 'flex', overflowX: 'auto', padding: '8px 0 24px 0' }}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks?.[column.id] || []}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </DragDropContext>

      <Dialog
        hidden={!isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        dialogContentProps={{
          type: DialogType.normal,
          title: 'Add New Task'
        }}
      >
        <TaskForm 
          onSubmit={handleAddTask} 
          onCancel={() => setIsDialogOpen(false)} 
        />
      </Dialog>
    </>
  );
};

export default Board;
