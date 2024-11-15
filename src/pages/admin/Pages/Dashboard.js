import EnrollmentByAgeChart from "../../../components/admin/charts/EnrollmentByAgeChart";
import EnrollmentByGenderChart from "../../../components/admin/charts/EnrollmentByGenderChart";
import StudentGrowthChart from "../../../components/admin/charts/StudentGrowthChart";
import StudentPerformanceChart from "../../../components/admin/charts/StudentPerformanceChart";
import "../../../assets/css/admin/dashboard.css";
import {
  studentGrowthChartData,
  adminSummary,
  performanceData,
  enrollmentByAgeData,
} from "../data";
import TeachersToStudentRatioChart from "../../../components/admin/charts/TeachersToStudentRatioChart";
import { useGetUserProfileQuery } from "../../../app/api/userApi";
import { useGetAllTeachersQuery } from "../../../app/api/teachersApi";
import { useGetAllStudentsQuery } from "../../../app/api/studentsApi";
import { useGetAllClassesQuery } from "../../../app/api/classApi";
import { useGetAllSubjectsQuery } from "../../../app/api/allSubjectApi";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function getColorByItemId(id) {
  switch (id) {
    case 1:
      return "#4A3AFF";
    case 2:
      return "#B062FF";
    case 3:
      return "#009E4D";
    case 4:
      return "#3AB8FF";
    default:
      return "black"; // Default color if the id doesn't match 1-4
  }
}
const Dashboard = () => {
  const { _ } = useGetUserProfileQuery();
  const { user, isLoading } = useSelector((state) => state.user);
  const { data: teachersData } = useGetAllTeachersQuery();
  const { data: studentsData } = useGetAllStudentsQuery();
  const { data: classesData } = useGetAllClassesQuery();
  const { data: subjectsData } = useGetAllSubjectsQuery();
  const [maleToFemaleRatio, setMaleToFemaleRatio] = useState([]);
  const [teacherToStudentRatio, setTeacherStudentRatio] = useState([]);

  useEffect(() => {
    let boysToGirlsRatio = [
      {
        name: "Boys",
        value: studentsData
          ? studentsData.filter((student) => student.gender === "male").length
          : 0,
      },
      {
        name: "Girls",
        value: studentsData
          ? studentsData.filter((student) => student.gender === "female").length
          : 0,
      },
    ];
    setMaleToFemaleRatio(boysToGirlsRatio);
  }, [studentsData]);

  useEffect(() => {
    let teacherStudentRatio = [
      { name: "Teachers", value: teachersData?.length },
      { name: "Students", value: studentsData?.length },
    ];
    setTeacherStudentRatio(teacherStudentRatio);
  }, [teachersData, studentsData]);

  return (
    <article className="admin-dashboard">
      <section className="admin-dashboard-heading">
        <h1>Welcome Admin!</h1>
        <p>
          <span>Home</span>/ <span className="gray">Admin</span>
        </p>
      </section>

      <section className="dashboard-summary flex flex-col sm:flex-row gap-5">
        {isLoading ? (
          <>
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="w-[270px] sm:w-[400px] bg-[#f8fafd] rounded-lg animate-pulse h-[150px]"
              ></div>
            ))}
          </>
        ) : (
          adminSummary.map((item) => (
            <div className="card" key={item.id}>
              <div className="user">
                <div style={{ color: getColorByItemId(item.id) }}>
                  {item.icon}
                </div>
                <div className="name">{item.name}</div>
                <div>{item.dots}</div>
              </div>
              <div
                className="value"
                style={{ color: getColorByItemId(item.id) }}
              >
                {item.id === 1
                  ? teachersData?.length
                  : item.id === 2
                    ? studentsData?.length
                    : item.id === 3
                      ? subjectsData?.length
                      : classesData?.length}{" "}
              </div>
            </div>
          ))
        )}
      </section>

      <section className="dashboard-charts">
        <section className="dashboard-charts-left">
          {isLoading ? (
            <>
              <div className="w-[900px] bg-[#ffffff] rounded-lg animate-pulse h-[280px]"></div>

              <div className="w-[900px] bsetMaleToFemaleRatiog-[#ffffff] rounded-lg animate-pulse h-[280px]"></div>
            </>
          ) : (
            <>
              <div className="chart-container">
                <StudentGrowthChart
                  className="chart-container"
                  data={studentGrowthChartData}
                />
              </div>

              <div className="chart-container">
                <StudentPerformanceChart data={performanceData} />
              </div>
            </>
          )}
        </section>

        <section className="dashboard-charts-right">
          {isLoading ? (
            <>
              <div className="w-[900px] bg-[#ffffff] rounded-lg animate-pulse h-[200px]"></div>
              <div className="w-[900px] bg-[#ffffff] rounded-lg animate-pulse h-[200px]"></div>
              <div className="w-[900px] bg-[#ffffff] rounded-lg animate-pulse h-[200px]"></div>
            </>
          ) : (
            <>
              <div className="chart-container">
                <TeachersToStudentRatioChart data={teacherToStudentRatio} />
              </div>
              <div className="chart-container">
                <EnrollmentByGenderChart data={maleToFemaleRatio} />
              </div>
              <div className="chart-container">
                <EnrollmentByAgeChart data={enrollmentByAgeData} />
              </div>
            </>
          )}
        </section>
      </section>
    </article>
  );
};

export default Dashboard;
