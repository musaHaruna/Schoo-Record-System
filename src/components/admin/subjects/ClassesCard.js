import { Link } from "react-router-dom";
import "./ClassesCard.css";
import { BookOpen } from "lucide-react";
import { Button } from "../../../components/ui/button";
import DeleteModal from "../../DeleteModal";
import EditClass from "./EditClass";

const ClassesCard = ({ className }) => {
  return (
    <div className="py-5 px-4 shadow rounded-lg ">
      <div className="flex items gap-4 items-center justify-between">
        <div className="flex items gap-4 items-center">
          <BookOpen
            size={30}
            className="p-01 rounded-full text-white bg-[#4a3aff]"
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">{className?.name}</h2>

            <div>
              <p className="text-sm">{className.students?.length} Students</p>
            </div>
          </div>
        </div>

        <div>
          <EditClass classId={className.id}/>
        </div>
      </div>
      <div className="flex justify-between mt-4 items-center">
        <div>
          <DeleteModal id={className.id} type="class" />
        </div>
        <div className="flex justify-between gap-3 items-center">
          <Link to={`/admin/class/${className.id}`}>
            <Button variant="outline" className="text-sm">
              View
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
