import { Link } from "react-router-dom";
import "./ClassesCard.css";
import { BookOpen } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { MdDeleteForever } from "react-icons/md";
import DeleteModal from "../../DeleteModal";

const ClassesCard = ({className}) => {
  return (
    <div className="py-5 px-4 shadow rounded-lg ">
    <div className="flex items gap-4">
      <BookOpen size={30} className="p-01 rounded-full text-white bg-[#4a3aff]" />

      <div className="flex flex-col gap-1">
      <h2 className="text-lg font-semibold">{className.name}</h2>

      <div>
      <p className="text-sm">25 Students, 4 Teachers</p>
      </div>
      </div>

    </div>
        <div  className="flex justify-between mt-4">
        <DeleteModal id={className.id} type="class" />
      <Link to={`/admin/class/${className.id}`}>
        <Button variant="outline" className="text-sm">View</Button>
      </Link>
        </div>

    
  </div>
  );
};

export default ClassesCard;
