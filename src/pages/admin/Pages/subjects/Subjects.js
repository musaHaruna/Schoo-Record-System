import SubjectTable from "../../../../components/admin/subjects/SubjectTable";
import { Logo } from "../../../../components/images";
import AddSubject from "./AddSubject";
import {
  useGetAllSubjectsQuery,
  useDeleteSubjectMutation,
} from "../../../../app/api/allSubjectApi";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Subjects = () => {
  const { data, isLoading, error } = useGetAllSubjectsQuery();
  const [deleteSubject] = useDeleteSubjectMutation(); // Use mutation to delete subject

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
  }, [error]);

  // Handle subject deletion
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subject?")) {
      deleteSubject(id)
        .unwrap()
        .then(() => {
          toast.success("Subject deleted successfully!");
        })
        .catch((error) => {
          toast.error(error?.data?.message || "Failed to delete subject.");
        });
    }
  };

  const handleEdit = (id) => {
    // Navigate to the edit page or open an edit modal with the subject id
    console.log("Edit subject with id:", id);
  };

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
    {
      field: "actions",
      headerName: "Actions",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="flex gap-4">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => handleEdit(params.row.id)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:underline"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
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
