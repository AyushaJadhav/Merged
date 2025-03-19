import React, { useState, useEffect } from 'react';
import { PrimaryButton, Stack, TextField } from '@fluentui/react';
import Sidebar from "./components/SideBar/SideBar";
import ListBoard from "./components/ListView/ListBoard";
import Calendar from "./components/CalendarView/Calendar";

// Context & Hooks
import { useTheme } from "./components/KanbanBoard/context/ThemeContext";
import { useKanban } from './components/KanbanBoard/hooks/useKanban';
import ThemeProvider from "./components/CalendarView/context/ThemeContext";


// Components
import Header from './components/KanbanBoard/ui/Header';
import ThemeSelector from './components/KanbanBoard/ui/ThemeSelector';
import Board from './components/KanbanBoard/Board/Board';
import TaskDialog from './components/KanbanBoard/dialogs/TaskDialog';

// Styles
import { createThemeContainerStyles } from './components/KanbanBoard/styles/styleUtils';

const App = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { tasks: originalTasks, addTask, handleDragEnd, handleDeleteTask } = useKanban();
  const [filteredTasks, setFilteredTasks] = useState(originalTasks);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredTasks(originalTasks);
      return;
    }

    const newFilteredTasks = {};
    Object.keys(originalTasks).forEach(columnId => {
      newFilteredTasks[columnId] = originalTasks[columnId].filter(task =>
        task.assignee && task.assignee.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setFilteredTasks(newFilteredTasks);
  }, [searchQuery, originalTasks]);

  const { theme } = useTheme();
  const themeContainerStyles = createThemeContainerStyles(theme);

  const handleAddTask = (task) => {
    addTask(task);
    setIsDialogOpen(false);
  };

  return (
    <div style={{
      padding: '24px',
      background: theme.palette.white,
      minHeight: '100vh',
      transition: 'all 0.2s ease-in-out'
    }}>
      <Header />

      <div style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginRight: '15px',
        alignItems: 'center'
      }}>
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <TextField
            placeholder="Search by assigned user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Stack>

        <div style={{ position: 'relative' }}>
          <PrimaryButton
            text="Toggle Theme"
            onClick={() => setIsThemeSelectorOpen(!isThemeSelectorOpen)}
            styles={{
              root: {
                borderRadius: '3px',
                padding: '0 16px'
              }
            }}
          />

          {isThemeSelectorOpen && (
            <div style={{
              position: 'absolute',
              top: '36px',
              right: '0',
              width: '250px',
              background: theme.palette.white,
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
              borderRadius: '4px',
              border: `1px solid ${theme.palette.neutralLight}`,
              padding: '12px',
              zIndex: 10
            }}>
              <h3 style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                fontWeight: 600,
                color: theme.palette.neutralPrimary,
                borderBottom: `1px solid ${theme.palette.neutralLight}`,
                paddingBottom: '8px'
              }}>
                Select Theme
              </h3>
              <ThemeSelector />
            </div>
          )}
        </div>
      </div>

      <Board
        tasks={filteredTasks}
        handleDragEnd={handleDragEnd}
        handleDeleteTask={handleDeleteTask}
        addTask={handleAddTask}
      />

      <TaskDialog
        isOpen={isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        onSubmit={handleAddTask}
      />
       <Calendar />

    </div>
  );
};

export default App;
