import { createSlice } from "@reduxjs/toolkit";

const epicDatesReducer = createSlice({
  name: "epicDates",
  initialState: {}, 
  reducers: {
    updateEpicDates: (state, action) => {
      const { epic, startDate, dueDate } = action.payload;
      state[epicName] = { 
        startDate: startDate ? startDate.getTime() : null,
        dueDate: dueDate ? dueDate.getTime() : null,
     };
    },
  },
});

export const { updateEpicDates } = epicDatesReducer.actions;
export default epicDatesReducer.reducer;
