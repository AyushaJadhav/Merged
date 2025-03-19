import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';
import { Provider } from "react-redux";
import { ThemeProvider } from "./components/KanbanBoard/context/ThemeContext";
import RoutesComponent from "./routes";  // ✅ This handles routing
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {/* ✅ RoutesComponent alone handles routing */}
        <RoutesComponent />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
