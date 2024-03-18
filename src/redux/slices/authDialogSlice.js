import { createSlice } from "@reduxjs/toolkit";

/* todosSlice.js */
//Configuration object for createSlice()
const options = {
  name: "authdialogslice", //Name of slice
  initialState: { isSignInOpen: false, isSignUpOpen: false }, //Initial state of slice
  reducers: {
    //Reducer for "addTodo" action
    setSignInOpen: (state, action) => {
      return {
        isSignUpOpen: false,
        isSignInOpen: true,
      };
    },
    //Reducer for "toggleTodo" action
    setSignUpOpen: (state, action) => {
      return {
        isSignInOpen: false,
        isSignUpOpen: true,
      };
    },
    setCloseAll: (state, action) => {
      return {
        ...state,
        isSignInOpen: false,
        isSignUpOpen: false,
      };
    },
  },
};

const authDialogSlice = createSlice(options);

export const { setSignInOpen, setSignUpOpen, setCloseAll } =
  authDialogSlice.actions;
export default authDialogSlice.reducer;
