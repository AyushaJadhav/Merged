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

const Layout = ({ children }) => {
  const location = useLocation();

  // Exclude sidebar on Signup and Login pages
  const shouldShowSidebar = !["/", "/login"].includes(location.pathname);

  return (
    <div style={{ display: "flex" }}>
      {shouldShowSidebar && <Sidebar />}
      <div style={{ marginLeft: shouldShowSidebar ? "260px" : "0", padding: "20px", width: "100%" }}>
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
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesComponent;
