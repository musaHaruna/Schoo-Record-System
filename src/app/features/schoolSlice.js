import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schoolName: "",
  schoolLogo: null,
  currentSession: "",
  nextTermStartDate: "",
};

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    updateSchoolSettings: (state, action) => {
      const { schoolName, schoolLogo, currentSession, nextTermStartDate } =
        action.payload;
      state.schoolName = schoolName;
      state.schoolLogo = schoolLogo;
      state.currentSession = currentSession;
      state.nextTermStartDate = nextTermStartDate;
    },
  },
});

export const { updateSchoolSettings } = schoolSlice.actions;
export default schoolSlice.reducer;
