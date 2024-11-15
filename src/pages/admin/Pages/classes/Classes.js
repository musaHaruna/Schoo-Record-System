import { Button } from "../../../../components/ui/button";
import ClassesCard from "../../../../components/admin/subjects/ClassesCard";
import AddClasss from "./AddClasss";
import { useGetAllClassesQuery } from "../../../../app/api/classApi";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const Classes = () => {
  const { data, isLoading } = useGetAllClassesQuery();

  useEffect(() => {
    console.log("Classes>>>", data);
  }, [data]);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loader2 className=" animate-spin w-[60px] h-[60px]" />
      </div>
    );
  }

  return (
    <section className="bg-white w-full h-auto sm:h-screen">
      <div className=" p-4 max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/newFolder.png" alt="img" className="w-[90px]" />
            <div className="flex flex-col">
              <h1 className="text-[32px]">All Classes</h1>
              <p className="text-sm">Total Classes {data.length}</p>
            </div>
          </div>

          <div>
            <AddClasss />
          </div>
        </div>

        <div className="mt-4 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((_, index) => (
                <div key={index} className="py-5 px-4 shadow rounded-lg h-[150px] bg-slate-100 animate-pulse">
                  <div className="flex items gap-4">
                    <div className="bg-white w-[40px] h-[40px] p-4 rounded-full" />
                    <div className="flex flex-col gap-1">
                      <div className="p-3 bg-white w-[100px] rounded-lg" />
                      <div className="p-3 bg-white w-[200px] rounded-lg" />
                    </div>
                  </div>
                </div>
              ))
            : data.map((classes) => (
                <ClassesCard key={classes.id} className={classes} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
