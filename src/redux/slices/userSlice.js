import { createSlice } from "@reduxjs/toolkit";

/* todosSlice.js */
//Configuration object for createSlice()
const options = {
  name: "userslice", //Name of slice
  initialState: { userFirebase: {} }, //Initial state of slice
  reducers: {
    //Reducer for "addTodo" action
    setUser: (state, action) => {
      return {
        ...state,
        userFirebase: action.payload,
      };
    },
    //Reducer for "toggleTodo" action
    listUser: (state, action) => {
      return state;
    },
    clearUser: (state, action) => {
      return {
        ...state,
        userFirebase: {},
      };
    },
  },
};

const userSlice = createSlice(options);

export const { setUser, listUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
