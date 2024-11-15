import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "lucide-react";
import { useGetSingleClassesQuery, useUpdateClassesMutation } from "../../../app/api/classApi";

const EditClass = ({ classId }) => {
  const navigate = useNavigate();
  const [updateClass, { isLoading, isSuccess, error }] = useUpdateClassesMutation();
  const [className, setClassName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const { data, isLoading: isFetching } = useGetSingleClassesQuery(classId);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
      console.log(error.data);
    }

    if (isSuccess) {
      toast.success("Saved Successfully");
      setOpenDialog(false); // Close the modal on successful save
    }
  }, [error, isSuccess]);

  useEffect(() => {
    if (data) {
      setClassName(data.name); // Set class name when data is fetched
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!classId || !className.trim()) {
      toast.error("Class Name cannot be empty");
      return;
    }
    updateClass({ id: classId, name: className }); // Pass an object with id and name
  };

  return (
    <Dialog open={openDialog} onOpenChange={(isOpen) => setOpenDialog(isOpen)}>
      <DialogTrigger>
        <EditIcon onClick={() => setOpenDialog(true)} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-semibold">Edit Class</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm">Class Name</label>
            <input
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              placeholder="JSS1, JSS2, SS2, e.t.c"
              className="py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm"
              disabled={isFetching} // Disable input while fetching class data
            />
          </div>
          <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">
            {isLoading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditClass;
