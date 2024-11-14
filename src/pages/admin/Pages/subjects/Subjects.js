import SubjectTable from "../../../../components/admin/subjects/SubjectTable";
import { Logo } from "../../../../components/images";
import AddSubject from "./AddSubject";
import { useGetAllSubjectsQuery } from "../../../../app/api/allSubjectApi";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Subjects = () => {
  const { data, isLoading, error } = useGetAllSubjectsQuery();

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
  }, [error]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 130,
      renderCell: () => {
        return (
          <div className="h-[30px] w-[30px] rounded-full">
            <Logo className="w-[10px] h-[10px]" />
          </div>
        );
      },
    },
    { field: "subjectName", headerName: "Subject Name", width: 170 },
    { field: "addedBy", headerName: "Added By", width: 150 },
    {
      field: "class",
      headerName: "Class",
      width: 150,
      renderCell: (params) => {
        return <span>{params.row.class?.name || "N/A"}</span>; // Render class name or N/A if not available
      },
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader2 className="animate-spin w-[60px] h-[60px]" />
      </div>
    );
  }

  return (
    <section className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[32px]">All Subjects</h1>

        <div>
          <AddSubject />
        </div>
      </div>

      <div className="p-2 w-full">
        <SubjectTable columns={columns} row={data} showDelete={true} />
      </div>
    </section>
  );
};

export default Subjects;
