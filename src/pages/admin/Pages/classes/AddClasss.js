import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import { Button } from "../../../../components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { useCreateClassMutation } from "../../../../app/api/classApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddClasss = () => {
  const navigate = useNavigate();
  const [createClass, { isLoading, isSuccess, error }] =
    useCreateClassMutation();
  const [className, setClassName] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }

    if (isSuccess) {
      toast.success("Class Created Successfully");
      setClassName("");
      setOpenDialog(false);
    }
  }, [error, isSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createClass({ name: className });
  };

  // console.log(className)

  return (
    <Dialog onOpenChange={() => setOpenDialog(false)}>
      <DialogTrigger>
        <span
          onClick={() => setOpenDialog(true)}
          className="h-10 px-4 py-4 rounded-lg bg-[#4a3aff] text-white hover:bg-[#5446f2] flex items-center gap-2 "
        >
          <Plus />
          Add New Class
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-semibold">Add New Class</DialogTitle>
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
            />
          </div>

          <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">
            {isLoading ? <Loader2 className="animate-spin" /> : "Create Class"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddClasss;
