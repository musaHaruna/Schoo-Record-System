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
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useCreateSessionMutation } from "../../../../app/api/sessionsApi";

const AddSession = () => {
  const navigate = useNavigate();
  const [createSession, { isLoading, isSuccess, error }] =
    useCreateSessionMutation();
  const [sessionName, setSessionName] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
    if (isSuccess) {
      toast.success("Session Created Successfully");
      setOpenDialog(false);
      //   navigate("/admin/academic-sessions")
    }
  }, [error, isSuccess]);

  const formatStartDate = startDate.toISOString().split("T")[0];
  const formatEndDate = endDate.toISOString().split("T")[0];
  // Output: "2022-07-31"

  const handleSubmit = (e) => {
    e.preventDefault();

    createSession({
      name: sessionName,
      startDate: formatStartDate,
      endDate: formatEndDate,
    });
  };

  return (
    <Dialog onOpenChange={() => setOpenDialog(false)}>
      <DialogTrigger>
        <span
          onClick={() => setOpenDialog(true)}
          className="text-sm sm:text-[16px] h-10 px-4 py-4 rounded-lg bg-[#4a3aff] text-white hover:bg-[#5446f2] flex items-center gap-2 ]"
        >
          <Plus />
          Add New Session
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-semibold">Add New Session</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-sm">Session Name</label>
            <input
              type="text"
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              placeholder="2023/2024"
              className="py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm"
            />
          </div>

          <div className="flex items-center gap-4 justify-center w-full ">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-500 text-sm">Start Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat={"MM/dd/yyyy"}
                timeInputLabel="Time"
                wrapperClassName="date-picker"
                placeholderText="Start Date"
                className="py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-500 text-sm">End Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                dateFormat={"MM/dd/yyyy"}
                timeInputLabel="Time"
                wrapperClassName="date-picker"
                placeholderText="End Date"
                className="py-3 bg-[#F9F9F9] outline-none px-3 border-none text-sm w-full"
              />
            </div>
          </div>

          <Button className="bg-[#4a3aff] text-white hover:bg-[#5446f2]">
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create Session"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddSession;
