import React, { useState } from "react";
import { useSelector ,useDispatch  } from "react-redux";
import SprintList from "./SprintList";
import EditDatesModal from "./EditDatesModal";
import TaskBar from "./TaskBar";
import { DefaultButton, IconButton, ContextualMenu } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react";
import { updateEpicDates } from "../../redux/epicDatesReducer";


initializeIcons();

const SprintRow = ({ children }) => {
  return (
    <div className=" striped flex absolute mt-5 w-full pt-7 ">{children}</div>
  );
};

SprintRow.Header = () => {
  const epics = useSelector((state) => state.epics);
  const dispatch = useDispatch();

  const [hoveredEpic, setHoveredEpic] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [menuTarget, setMenuTarget] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEpic, setSelectedEpic] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedDueDate, setSelectedDueDate] = useState(null);

  const menuItems = [
    { key: "createIssue", text: "Create issue" },
    { key: "moveIssue", text: "Move issue" },
    { key: "changeColor", text: "Change issue color" },
    { key: "editDates", text: "Edit dates" },
    { key: "removeDates", text: "Remove dates" },
  ];

  const openModal = (epic) => {
    setSelectedEpic(epic);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEpic(null);
  };
  const handleDateConfirm = (startDate, dueDate) => {
    
    dispatch(updateEpicDates({ epic: selectedEpic, startDate, dueDate }));

    closeModal();
  };

  const onMenuClick = (event, epic, index) => {
    setMenuTarget(event.currentTarget);
    setSelectedEpic(epic);
    setMenuOpen(index);
  };

  const onMenuDismiss = () => {
    setMenuTarget(null);
    setMenuOpen(null);
  };

  const onMenuItemClick = (item) => {
    if (item.key === "editDates" && selectedEpic) {
      openModal(selectedEpic);
    }

    onMenuDismiss();
  };

  return (
    <div className="flex flex-col space-y-2 ">
      {epics.map((epic, index) => (
        <div
          key={index}
          className="flex flex-row w-full"
          onMouseEnter={() => setHoveredEpic(index)}
          onMouseLeave={() => setHoveredEpic(null)}
        >
          <div className="basis-2xl shrink-0  border">
            <div className="flex-1"> {epic} </div>
            {hoveredEpic === index && (
              <div className=" flex flex-column gap-2 ">
                <IconButton iconProps={{ iconName: "Add" }} title="Add" />
                <IconButton
                  iconProps={{ iconName: "MoreVertical" }}
                  title="More options"
                  onClick={(event) => onMenuClick(event, epic, index)}
                />
              </div>
            )}
          </div>
          {menuOpen === index && menuTarget && (
            <ContextualMenu
              target={menuTarget}
              items={menuItems.map((item) => ({
                ...item,
                onClick: () => onMenuItemClick(item),
              }))}
              onDismiss={onMenuDismiss}
            />
          )}

          {isModalOpen && selectedEpic && (
            <EditDatesModal
              isOpen={isModalOpen}
              onClose={closeModal}
              epic={selectedEpic} 
              onConfirm={handleDateConfirm} 
            />
          )}

          <SprintRow.Body />
        </div>
      ))}
      <SprintList />
    </div>
  );
};
SprintRow.Body = () => {
  return <div className="striped p-3 flex-1"></div>;
  <TaskBar epic={epic} />
};

export default SprintRow;
