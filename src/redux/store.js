import { configureStore } from "@reduxjs/toolkit";

import authDialogReducer from "./slices/authDialogSlice";
import locationReducer from "./slices/locationSlice";
import userReducer from "./slices/userSlice";
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `authDialog`, handled by `authDialogReducer`
    authDialog: authDialogReducer,
    locationslice: locationReducer,
    userData: userReducer,
  },
});

export default store;
