import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import StudentsTable from "../../../../components/admin/students/StudentsTable";
import { useGetClassStudentsQuery, useGetSingleClassesQuery } from "../../../../app/api/classApi";

const SingleClass = () => {
  // get class id from the url
  const { id } = useParams();
  const { data: students } = useGetClassStudentsQuery(id);
  const { data: classDetails } = useGetSingleClassesQuery(id);

  useEffect(() => {
    console.log("classDetails>>>", students);
  }, [students]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First Name", width: 170 },
    { field: "middleName", headerName: "Middle Name", width: 170 },
    { field: "otherNames", headerName: "Other Names", width: 170 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "gender", headerName: "gender", width: 170 },
    { field: "parentsNumber", headerName: "Parents Number", width: 170 },
  ];

  return (
    <section className="h-screen max-w-7xl mx-auto p-10">
      <div className="flex flex-col sm:flex-row gap-6 ">
        <div className="flex flex-col bg-white w-[500px] p-8 justify-center items-center rounded-lg shadow-md">
          <img src="/folder.png" alt="img" className="w-[60px]" />
        </div>

        <div className="flex items-center gap-4">
          <div className="p-8 shadow-md flex items-center flex-col justify-center gap-2 bg-white w-[200px] h-[200px] rounded-lg">
            <img src="/paper.png" alt="img" className="w-[60px]" />
            <p>{students?.length || 0}</p>
            <p className="text-black text-sm">Students</p>
          </div>

          <div className="p-8 flex flex-col items-center justify-center gap-2 bg-white w-[200px] h-[200px] shadow-md rounded-lg">
            <img src="/statistics.png" alt="img" className="w-[60px]" />
            <p>N/A</p>
            <p className="text-black text-sm">Teachers</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white p-10 mt-10 ">
        <h2 className="text-[20px] font-semibold mb-4">
          Students in {classDetails?.name}
        </h2>

        {/* Render StudentsTable only if there are students */}
        {students?.length > 0 ? (
          <div className="p-2 w-full rounded-lg">
            <StudentsTable
              link="students"
              route="students"
              columns={columns}
              row={students}
              showDelete={true}
            />
          </div>
        ) : (
          <p>No students available for this class.</p>
        )}
      </div>
    </section>
  );
};

export default SingleClass;
