import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleTeacherQuery } from "../../../../app/api/teachersApi";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

const TeacherProfile = () => {
  const params = useParams();
  const { user } = useSelector((state) => state.user);

  console.log("hello");
  console.log(user);
  const { data, isLoading } = useGetSingleTeacherQuery(user?.id);

  const [teacherDetails, setTeacherDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: data?.gender,
    phoneNumber: "",
    qualifications: "",
  });

  // useEffect(()=>{
  //     setTeacherDetails({
  //     name:data?.name,
  //     email:data?.email,
  //     dateOfBirth:data?.dateOfBirth,
  //     gender:data?.gender,
  //     phoneNumber:data?.phoneNumber,
  //     qualifications:data?.qualifications
  //     })

  // }, [user, data])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTeacherDetails((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  // if(isLoading){
  //     return(
  //       <div className="flex items-center justify-center h-screen w-full">
  //         <Loader2 className=" animate-spin w-[60px] h-[60px]" />
  //     </div>
  // )
  //   }

  return (
    <section className=" max-w-7xl mx-auto">
      <div className="bg-white  min-h-screen px-4 sm:px-10 py-6 flex flex-col gap-6">
        {/* heading */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <h2 className="text-[18px] font-semibold">{""}</h2>
              <p className="text-gray-500 text-sm">My Profile</p>
            </div>
          </div>
        </div>

        {/* body */}

        <form className="mt-6 flex flex-col gap-4">
          <h2 className="text-[18px]">View Teacher Information</h2>

          <div className="w-full border border-gray-200 p-4 flex flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={teacherDetails.name}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={teacherDetails.email}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            {/* second row */}
            <div className="grid   gap-6 grid-cols-12 ">
              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="dateOfBirth" className="text-sm">
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="dd/mm/yyy"
                  value={teacherDetails.dateOfBirth}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="gender" className="text-sm">
                  Gender
                </label>
                <select
                  value={teacherDetails.gender}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                >
                  <option></option>
                  <option value={"male"}>male</option>
                  <option value={"female"}>female</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 col-span-6">
                <label htmlFor="phoneNumber" className="text-sm">
                  Teacher's Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={teacherDetails.phoneNumber}
                  onChange={handleChange}
                  placeholder="090123748393"
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 col-span-12">
                <label htmlFor="qualifications" className="text-sm">
                  Qualifications
                </label>
                <textarea
                  type="text"
                  id="qualifications"
                  name="qualifications"
                  placeholder=""
                  value={teacherDetails.qualifications}
                  onChange={handleChange}
                  className="px-4 py-2 outline-none border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TeacherProfile;
