import { createSlice } from "@reduxjs/toolkit";

/* todosSlice.js */
//Configuration object for createSlice()
const options = {
  name: "locationslice", //Name of slice
  initialState: { pathname: "" }, //Initial state of slice
  reducers: {
    //Reducer for "addTodo" action
    setPathName: (state, action) => {
      return {
        ...state,
        pathname: action.payload,
      };
    },
    //Reducer for "toggleTodo" action
    listPathName: (state, action) => {
      return state;
    },
  },
};

const locationSlice = createSlice(options);

export const { setPathName, listPathName } = locationSlice.actions;
export default locationSlice.reducer;
