import { createSlice } from "@reduxjs/toolkit";

const epicReducer = createSlice({
  name: "epics",
  initialState: [],
  reducers: {
    addEpic: (state, action) => {
      state.push(action.payload); 
    },
  },
});

export const { addEpic } = epicReducer.actions; 
export default epicReducer.reducer; 