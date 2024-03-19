import { configureStore } from "@reduxjs/toolkit";

import authDialogReducer from "./slices/authDialogSlice";
import locationReducer from "./slices/locationSlice";
// import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `authDialog`, handled by `authDialogReducer`
    authDialog: authDialogReducer,
    locationslice: locationReducer,
  },
});

export default store;
