import "../../../../assets/css/admin/teachersPage.css";
import { Link, useNavigate } from "react-router-dom";
import NewTeachersTable from "../../../../components/admin/teachers/NewTeachersTable";
import { Button } from "../../../../components/ui/button";
import { Loader2 } from "lucide-react";
import { useGetAllTeachersQuery } from "../../../../app/api/teachersApi";

const Teachers = () => {
  const { data, isLoading } = useGetAllTeachersQuery();
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 160 },
    { field: "gender", headerName: "Gender", width: 130 },
    {
      field: "role",
      headerName: "Role",
      width: 130,
    },
    { field: "email", headerName: "Email", width: 160 },
    { field: "phoneNumber", headerName: "Phone Number", width: 160 },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader2 className=" animate-spin w-[60px] h-[60px]" />
      </div>
    );
  }

  return (
    <article className="py-4 px-2 sm:p-8 w-full h-full flex flex-col gap-6 overflow-y-auto">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-[32px]">All Staff</h1>
        <Link to="/admin/add-teacher">
          <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">
            Add New Staff
          </Button>
        </Link>
      </div>

      <div className="p-2 w-full ">
        <NewTeachersTable
          link="all-teachers"
          columns={columns}
          row={data}
          showDelete={true}
        />
      </div>
    </article>
  );
};

export default Teachers;
