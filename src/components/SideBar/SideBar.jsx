import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Star20Filled,
  CalendarWorkWeek20Filled,
  Filter20Filled,
  Search20Filled,
  Apps20Filled,
  SlideAdd20Filled,
  AppRecent20Filled,
  Clipboard20Filled,
  LauncherSettings20Filled,
  TaskListSquareDatabase20Filled,
  PeopleTeam20Filled ,
} from "@fluentui/react-icons";
import "./Sidebar.css";
import jiraLogo from "../../assets/logo.jpeg"; 


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState(new Set());

  const toggleExpand = (key) => {
    setExpandedKeys((prev) => {
      const newExpanded = new Set(prev);
      newExpanded.has(key) ? newExpanded.delete(key) : newExpanded.add(key);
      return newExpanded;
    });
  };

  const menuItems = [
    { name: "Your work", url: "/your-work", icon: <CalendarWorkWeek20Filled /> },
    { name: "Starred", url: "/starred", icon: <Star20Filled /> },
    {
      name: "Filters",
      icon: <Filter20Filled />,
      children: [
        { name: "Search issues", url: "/search-issues", icon: <Search20Filled /> },
        {
          name: "Default filters",
          icon: <Filter20Filled />,
          children: [
            { name: "My open issues", url: "/my-open-issues", icon: <Filter20Filled /> },
            { name: "Reported by me", url: "/reported-by-me", icon: <Filter20Filled /> },
            { name: "All issues", url: "/all-issues", icon: <Filter20Filled /> },
            { name: "Open issues", url: "/open-issues", icon: <Filter20Filled /> },
            { name: "Done issues", url: "/done-issues", icon: <Filter20Filled /> },
            { name: "Viewed recently", url: "/viewed-recently", icon: <Filter20Filled /> },
            { name: "Created recently", url: "/created-recently", icon: <Filter20Filled /> },
            { name: "Resolved recently", url: "/resolved-recently", icon: <Filter20Filled /> },
            { name: "Updated recently", url: "/updated-recently", icon: <Filter20Filled /> },
            { name: "View all filters", url: "/view-all-filters", icon: <Filter20Filled /> },
          ],
        },
      ],
    },
    { name: "Apps", url: "/apps", icon: <Apps20Filled /> },
    { name: "Plans", url: "/listView", icon: <SlideAdd20Filled /> },
    { name: "Recent", url: "/recent", icon: <AppRecent20Filled /> },
    { name: "Projects", url: "/kanbanBoard", icon: <TaskListSquareDatabase20Filled /> },
    { name: "Dashboards", url: "/dashBoard", icon: <Clipboard20Filled /> },
    { name: "Teams", url: "/teams", icon: <PeopleTeam20Filled /> },
    { name: "Customize sidebar", url: "/customize-sidebar", icon: <LauncherSettings20Filled /> },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <img src={jiraLogo} alt="Jira Logo" className="jira-logo" />
        {!isCollapsed && <span className="jira-title">JIRA</span>}
        <button
          className="toggle-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          ☰
        </button>
      </div>

      <nav>
        {menuItems.map((item) => (
          <div key={item.name}>
            <NavLink to={item.url || "#"} className="nav-item" onClick={() => item.children && toggleExpand(item.name)}>
              {item.icon}
              {!isCollapsed && <span>{item.name}</span>}
            </NavLink>
            {item.children && expandedKeys.has(item.name) && (
              <div className="submenu">
                {item.children.map((subItem) => (
                  <div key={subItem.name}>
                    <NavLink to={subItem.url || "#"} className="nav-item" onClick={() => subItem.children && toggleExpand(subItem.name)}>
                      {subItem.icon}
                      {!isCollapsed && <span>{subItem.name}</span>}
                    </NavLink>
                    {subItem.children && expandedKeys.has(subItem.name) && (
                      <div className="submenu">
                        {subItem.children.map((nestedItem) => (
                          <NavLink key={nestedItem.name} to={nestedItem.url} className="nav-item">
                            {nestedItem.icon}
                            {!isCollapsed && <span>{nestedItem.name}</span>}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="invite-button">Invite People</button>
      </div>
    </div>
  );
};

export default Sidebar;
