import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import App from "./App";
import Sidebar from "./components/SideBar/SideBar";
import ListBoard from "./components/ListView/ListBoard";
import Board from "./components/KanbanBoard/Board/Board";
import SignupPage from "./components/AuthenticationSignup/SignupPage";
import LoginPage from "./components/AuthenticationSignup/LoginPage";
import Dashboard from "./components/AuthenticationSignup/DashBoard";
import CalendarView from "./components/CalendarView/Calendar";
import SprintPlanning from "./components/SprintPlanning/ContainerGrid";

const Layout = ({ children }) => {
  const location = useLocation();
  const shouldShowSidebar = !["/", "/login"].includes(location.pathname);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw", // Ensures full width
        backgroundColor: "#1e1e1e",
        overflow: "hidden",
      }}
    >
      {shouldShowSidebar && (
        <div style={{ width: "260px", flexShrink: 0 }}>
          <Sidebar />
        </div>
      )}

      <div
        style={{
          flexGrow: 1,
          padding: shouldShowSidebar ? "20px" : "0",  // No padding when sidebar is hidden
          backgroundColor: "#fff", // Content background
          color: "#000",
          minHeight: "100vh",
          width: "calc(100% - 260px)", // Ensures full-width adjustment
          boxSizing: "border-box",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const RoutesComponent = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/listView" element={<ListBoard />} />
          <Route path="/kanbanBoard" element={<App />} />
          <Route path="/calendarView" element={<CalendarView />} />
          <Route path="/sprintPlanning" element={<SprintPlanning />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesComponent;
