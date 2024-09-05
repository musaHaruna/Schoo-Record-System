import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Error, SelectPreference, Register, AdminRegistration, LoginPage, StaffRegistration } from "./pages";
import {
  Dashboard,
  Classes,
  SingleClass,
  AcademicSessions,
  Students,
  AddStudent,
  SingleStudent,
  Teachers,
  TeachersDetails,
  AddTeacher,
  Subjects,
  SingleSubjects,
  Results,
} from "./pages/admin/Pages";
import Layout from "./pages/admin/AdminLayout";
import AddTeachers from "./pages/admin/Pages/AddTeachers";
import StudentLayout from "./pages/student/StudentLayout";
import StudentDashboard from "./pages/teachers/TeachersDashboard";
import {  StudentViewResult } from "./pages/student/StudentViewResult";
import TeachersLayout from "./pages/teachers/TeachersLayout";
import TeachersDashboard from "./pages/teachers/TeachersDashboard";
import { ManageResults } from "./pages/teachers/ManageResults";
import { UploadResults } from "./pages/teachers/UploadResults";
import { ToastContainer, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";

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
        <Route path="/" element={<Landing />} />
        <Route path="/select-preference" element={<SelectPreference />} />
        {/* <Route path="/register" element={<Registration />} /> */}
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-registration" element={<AdminRegistration />} />
        <Route path="/staff-registration" element={<StaffRegistration />} />


        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="classes" element={<Classes />} />
          <Route path="academic-sessions" element={<AcademicSessions />} />
          <Route path="all-teachers" element={<Teachers />} />
          <Route path="add-teacher" element={<AddTeachers />} />
          <Route path="teachers-detail" element={<TeachersDetails />} />
          {/* admin manage students route  */}
          <Route path="students" element={<Students />} />
          {/* students route */}
          <Route path="subjects" element={<Subjects />} />
          <Route path="results/*" element={<Results />} />
          <Route path="subjects/:id" element={<SingleSubjects />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="result" element={<StudentViewResult />} />
        </Route>
        <Route path="/teacher" element={<TeachersLayout />}>
          <Route index element={<TeachersDashboard />} />
          <Route path='results' element={<ManageResults />} />
          <Route path="results/upload" element={<UploadResults />} />
        <Route index element={<Dashboard />} />
        <Route path="classes" element={<Classes />} />
        <Route path="class/:id" element={<SingleClass />} />


        <Route path="academic-sessions" element={<AcademicSessions />} />

        {/* teachers */}
        <Route path="all-teachers" element={<Teachers />} />
        <Route path="add-teachers" element={<AddTeachers />} />
        <Route path="add-teacher" element={<AddTeacher />} />
        <Route path="all-teachers/:id" element={<TeachersDetails />} />

        {/* students */}
        <Route path="students" element={<Students />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="student-details/:id" element={<SingleStudent />} />

        {/* subjects */}
        <Route path="subjects" element={<Subjects />} />
        <Route path="subjects/:id" element={<SingleSubjects />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
