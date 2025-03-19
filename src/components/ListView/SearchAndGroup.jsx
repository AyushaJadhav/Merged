import React from "react";
import { DefaultButton, Dropdown, TextField } from "@fluentui/react";

const SearchAndGroup = ({
  searchTerm,
  handleSearchChange,
  handleAddUserClick,
  newUser,
  setNewUser,
  handleCreateUser,
  handleGroupByChange,
  users,
  activeFilter,
  clearFilter,
}) => {
  // Organized Options with Headers
  const groupedOptions = [
    { key: "header_status", text: "Status", itemType: 2 },
    { key: "todo", text: "To Do" },
    { key: "inProgress", text: "In Progress" },
    { key: "completed", text: "Completed" },

    { key: "header_assignee", text: "Assignee", itemType: 2 },
    ...users.map((user) => ({ key: user, text: user })),

    { key: "header_category", text: "Category", itemType: 2 },
    { key: "research", text: "Research" },
    { key: "marketing", text: "Marketing" },
    { key: "mobile", text: "Mobile" },
    { key: "vision", text: "Vision" },
  ];

  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "15px" }}>
      {/* Search Bar */}
      <TextField
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        styles={{ fieldGroup: { width: 200 } }}
      />

      {/* New User TextBox */}
      <TextField
        placeholder="Enter user name"
        value={newUser}
        onChange={(e, newValue) => setNewUser(newValue)}
        styles={{ fieldGroup: { width: 180 } }}
      />

      {/* Add User Button */}
      <DefaultButton
        text="Add User"
        onClick={handleCreateUser}
        styles={{ root: { backgroundColor: "#0078D4", color: "#fff", padding: "8px 16px" } }}
      />

      {/* Group By Dropdown */}
      <Dropdown
        placeholder="Group By"
        options={groupedOptions}
        onChange={(e, option) => handleGroupByChange(option.text)}
        styles={{ dropdown: { width: 180 } }}
      />

      {/* Active Filter Display */}
      {activeFilter && (
        <div style={{
          backgroundColor: "#E6F4FF",
          borderRadius: "4px",
          padding: "5px 10px",
          display: "flex",
          alignItems: "center"
        }}>
          <span style={{ color: "#005A9E" }}>Filter: {activeFilter}</span>
          <DefaultButton
            text="Clear"
            onClick={clearFilter}
            styles={{ root: { marginLeft: "5px", backgroundColor: "#0078D4", color: "#fff" } }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchAndGroup;
