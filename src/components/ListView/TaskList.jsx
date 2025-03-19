import React, { useState } from 'react';
import { Stack, Text, PrimaryButton, TextField, Dropdown, Dialog, DialogFooter, DialogType, DefaultButton } from "@fluentui/react";
import TaskItem from './TaskItem';

const statusColors = {
    'To Do': '#f0f0f0',
    'In Progress': '#cce0ff',
    Completed: '#d4ffd4',
};

const categoryColors = {
    Research: '#fddede',
    Marketing: '#e6f7ff',
    Mobile: '#fff2cc',
    Vision: '#e8f5e9',
};

const TaskList = ({ group, taskList, handleAddTaskClick, handleDeleteTask, handleStatusChange, users }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskStatus, setNewTaskStatus] = useState('To Do');
    const [newTaskAssignee, setNewTaskAssignee] = useState(users[0] || '');
    const [newTaskCategory, setNewTaskCategory] = useState('Research');

    const handleCreateTask = () => {
        const newTask = {
            id: taskList.length + 1,
            sprint: group,
            title: newTaskTitle,
            status: newTaskStatus,
            assignee: newTaskAssignee,
            category: newTaskCategory,
        };
        handleAddTaskClick(newTask);
        setIsModalOpen(false);
    };

    return (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', borderRadius: '4px', padding: '10px' }}>
            <Stack horizontal verticalAlign="center" styles={{ root: { marginBottom: '10px' } }}>
                <Text variant="large">
                    {group} ({taskList.length} Tasks)
                </Text>
            </Stack>

            {taskList.map((task) => (
                <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleStatusChange={handleStatusChange} />
            ))}

            {/* Create Button & Dialog */}
            <Stack horizontal styles={{ root: { marginTop: '10px' } }}>
                <PrimaryButton text="+ Create" onClick={() => setIsModalOpen(true)} />
                
                <Dialog
                    hidden={!isModalOpen}
                    onDismiss={() => setIsModalOpen(false)}
                    dialogContentProps={{
                        type: DialogType.largeHeader,
                        title: "Create New Task",
                        subText: "Fill in the details below to create a new task.",
                    }}
                    modalProps={{
                        isBlocking: false,
                        styles: { main: { maxWidth: 450 } }, // Popup width adjustment
                    }}
                >
                    <Stack tokens={{ childrenGap: 10 }}>
                        <TextField 
                            label="Title" 
                            value={newTaskTitle} 
                            onChange={(ev, newValue) => setNewTaskTitle(newValue)} 
                        />
                        <Dropdown
                            label="Status"
                            options={Object.keys(statusColors).map((status) => ({ key: status, text: status }))}
                            selectedKey={newTaskStatus}
                            onChange={(ev, item) => setNewTaskStatus(item.key)}
                        />
                        <Dropdown
                            label="Assignee"
                            options={users.map((user) => ({ key: user, text: user }))}
                            selectedKey={newTaskAssignee}
                            onChange={(ev, item) => setNewTaskAssignee(item.key)}
                        />
                        <Dropdown
                            label="Category"
                            options={Object.keys(categoryColors).map((category) => ({ key: category, text: category }))}
                            selectedKey={newTaskCategory}
                            onChange={(ev, item) => setNewTaskCategory(item.key)}
                        />
                    </Stack>

                    <DialogFooter>
                        <PrimaryButton text="Create" onClick={handleCreateTask} />
                        <DefaultButton text="Cancel" onClick={() => setIsModalOpen(false)} />
                    </DialogFooter>
                </Dialog>
            </Stack>
        </div>
    );
};

export default TaskList;
