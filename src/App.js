import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Landing,
  Error,
  SelectPreference,
  AdminRegistration,
  LoginPage,
  StaffRegistration,
} from "./pages";
import {
  Dashboard,
  Classes,
  SingleClass,
  Students,
  AddStudent,
  SingleStudent,
  Teachers,
  TeachersDetails,
  AddTeacher,
  Subjects,
  SingleSubjects,
  Settings,
  SubjectStudents,
  Results,
  AccademicSessions,
  Assessments,
} from "./pages/admin/Pages";
import { TeacherProfile } from "./pages/teachers/pages";

import Layout from "./pages/admin/AdminLayout";
// import AddTeachers from "./pages/admin/Pages/AddTeachers";
import AddTeachers from "./pages/admin/Pages/AddTeachers";
import { ViewResult } from "./components/admin/results/ViewResult";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/teachers/TeachersDashboard";
import { StudentViewResult } from "./pages/student/StudentViewResult";
import TeachersLayout from "./pages/teachers/TeachersLayout";
import TeachersDashboard from "./pages/teachers/TeachersDashboard";
import { ManageResults } from "./pages/teachers/ManageResults";
import { UploadResults } from "./pages/teachers/UploadResults";
import TeacherLogin from "./pages/onboarding/TeacherLogin";
import EditTeacherDetails from "./pages/admin/Pages/teachers/EditTeacher";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/select-preference" element={<SelectPreference />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/staff-registration" element={<StaffRegistration />} />

        <Route path="/admin" element={<Layout />}>
          <Route path="settings" element={<Settings />} />
          <Route index element={<Dashboard />} />

          <Route path="classes" element={<Classes />} />
          <Route path="class/:id" element={<SingleClass />} />

          {/* teachers */}
          <Route path="all-teachers" element={<Teachers />} />
          {/* <Route path="add-teachers" element={<AddTeachers />} /> */}
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="all-teachers/:id" element={<TeachersDetails />} />
          {/* students */}
          <Route path="students" element={<Students />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="student-details/:id" element={<SingleStudent />} />
          {/* subjects */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects/:id" element={<SingleSubjects />} />
          <Route path="subject-students/:id" element={<SubjectStudents />} />

          {/* <Route path="academic-sessions" element={<AcademicSessions />} /> */}

          {/* teachers */}
          <Route path="all-teachers" element={<Teachers />} />
          <Route path="add-teachers" element={<AddTeachers />} />
          <Route path="add-teacher" element={<AddTeacher />} />
          <Route path="all-teachers/:id" element={<TeachersDetails />} />
          <Route path="all-teachers/:id/edit" element={<EditTeacherDetails />} />

          {/* students */}
          <Route path="students" element={<Students />} />
          <Route path="add-student" element={<AddStudent />} />
          <Route path="student-details/:id" element={<SingleStudent />} />

          {/* subjects */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="subjects/:id" element={<SingleSubjects />} />
          <Route
            path="subject-students/:subjectId/:classId"
            element={<SubjectStudents />}
          />

          {/* new merge */}
          <Route path="results/*" element={<Results />} />
          {/* academic-sessions */}
          <Route path="academic-sessions" element={<AccademicSessions />} />
          <Route path="assessments" element={<Assessments />} />

          {/* new merge */}
          <Route path="results/*" element={<Results />} />

          <Route path="result" element={<ViewResult />} />
        </Route>

        {/* students dashboard */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          {/* <Route path="profile/*" element={<StudentProfile />} /> */}
          <Route path="result" element={<StudentViewResult />} />
        </Route>

        {/* teachers dashboard */}
        <Route path="/teacher" element={<TeachersLayout />}>
          <Route index element={<TeachersDashboard />} />
          <Route path="profile" element={<TeacherProfile />} />
          <Route path="results" element={<ManageResults />} />
          <Route path="results/upload" element={<UploadResults />} />
        </Route>

        {/* adding new route  */}

        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
