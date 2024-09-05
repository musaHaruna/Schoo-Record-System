import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { studentsApi } from "./api/studentsApi";
import { teachersApi } from "./api/teachersApi";
import {classesApi} from "./api/classApi"
// import { studentsApi } from "./api/studentsApi";
import {allSubjectApi} from  "./api/allSubjectApi"
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice"


export const store = configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
    [allSubjectApi.reducerPath]: allSubjectApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    // [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      studentsApi.middleware,
      teachersApi.middleware,
      allSubjectApi.middleware,
      classesApi.middleware,
      // studentsApi.middleware,
    ]),
});
