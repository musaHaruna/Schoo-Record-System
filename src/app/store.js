import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { studentsApi } from "./api/studentsApi";
import { teachersApi } from "./api/teachersApi";
import { classesApi } from "./api/classApi";
// import { studentsApi } from "./api/studentsApi";
import { allSubjectApi } from "./api/allSubjectApi";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import classResultsReducer from "./features/classResultsSlice";
import subjectsReducer from "./features/subjectsSlice";

import { sessionsApi } from "./api/sessionsApi";
import { termsApi } from "./api/termApi";
import { resultsApi } from "./api/resultsApi";
import { assessmentsApi } from "./api/assessmentsApi";
import schoolReducer from "./features/schoolSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    classResults: classResultsReducer,
    subjects: subjectsReducer,
    school: schoolReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
    [allSubjectApi.reducerPath]: allSubjectApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [termsApi.reducerPath]: termsApi.reducer,
    [resultsApi.reducerPath]: resultsApi.reducer,
    [sessionsApi.reducerPath]: sessionsApi.reducer,
    [assessmentsApi.reducerPath]: assessmentsApi.reducer,
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
      sessionsApi.middleware,
      assessmentsApi.middleware,
      termsApi.middleware,
      resultsApi.middleware,
      // studentsApi.middleware,
    ]),
});
