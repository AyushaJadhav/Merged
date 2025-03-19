import { configureStore } from "@reduxjs/toolkit";
import epicReducer from "./epicReducer";
import epicDatesReducer from "./epicDatesReducer";

const store = configureStore({
  reducer: {
    epics:epicReducer,
    epicDates: epicDatesReducer
  }, 
});

export default store;
