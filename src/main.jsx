
import React from "react";
import ReactDOM from "react-dom/client";
 
import { ThemeProvider } from "./components/KanbanBoard/context/ThemeContext";
import RoutesComponent from "./routes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutesComponent />
    </ThemeProvider>
  </React.StrictMode>
);
