import { configureStore } from "@reduxjs/toolkit";

import authDialogReducer from "./slices/authDialogSlice";
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `authDialog`, handled by `authDialogReducer`
    authDialog: authDialogReducer,
  },
});

export default store;
