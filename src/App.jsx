import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Sidebar from  "./pages/SideBar/SideBar/";
import ListBoard from "./pages/ListView/ListBoard/";
import React from "react";
import './App.css';


const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", padding: "20px" }}>
        <Routes>
          
          
          
          <Route path="/plans" element={<ListBoard />} />
          
          
        </Routes><ListBoard />;
      </div>
    </div>
    
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
