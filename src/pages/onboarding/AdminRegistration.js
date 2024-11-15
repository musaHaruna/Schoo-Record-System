import React, { useEffect, useState } from "react";
import { Logo } from "../../components/images";
import { Button } from "../../components/ui/button";
import { useRegisterMutation } from "../../app/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

const StudentRegistration = () => {
  const navigate = useNavigate();
  const [register, { isLoading, isSuccess, error }] = useRegisterMutation();

  const [credentials, setCredientials] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    role: "admin",
  });

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
      console.log(error.data);
    }

    if (isSuccess) {
      navigate("/login");
      toast.success("Registered Successfully");
    }
  }, [error, isSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredientials((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.password.trim()) return toast.error("Password is missing");
    register(credentials);
  };

  return (
    <div className="w-full h-screen min-h-screen flex flex-col sm:flex-row bg-white ">
      <div className="hidden sm:flex flex-1 h-32 lg:h-full">
        <div className="relative flex h-32 items-end bg-gray-900 lg:h-full ">
          <img
            alt=""
            src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <div className=" logo-sm">
              <Logo />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome To Pecular Treasure
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              We welcome you to Pecular Treasure Nusary & Primary School.
              Register as an Admin today to proceed to your dashboard
            </p>
          </div>
        </div>
      </div>

      {/* form side */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-full py-10 sm:py-18 px-6 sm:px-12 flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className=" logo-sm">
              <Logo />
            </div>
            <p className="text-[16px] text-center">
              Register as an Admin into Perculiar Treasure School{" "}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4 mt-4 sm:max-w-[700px] justify-start p-2 sm:p-6  "
          >
            {/* user name */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-start">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="userName" className="text-sm">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            {/* email */}

            {/* <div className='flex flex-col gap-2 w-full'>
                        <label htmlFor='email'  className='text-sm'>Email</label>
                            <input type='email' id='email' 
                              name='email'
                              placeholder='user@email.com'
                              value={credentials.email}
                                onChange={handleChange}
                              className='px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg' />
                    </div> */}

            {/* password */}
            <div className="flex items-center gap-6 flex-col sm:flex-row">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="confirmPassword" className="text-sm">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={credentials.confirmPassword}
                  onChange={handleChange}
                  className="px-4 py-2 outline-[#988fff] border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-4">
              <Button className="w-full bg-[#4a3aff] hover:bg-[#4e3ffa] ">
                {isLoading ? <Loader2 className="animate-spin" /> : "Register"}
              </Button>
              <p className="text-black text-sm flex flex-wrap items-center">
                Already Registered?{" "}
                <Link
                  to="/login"
                  className="text-gray-600 cursor-pointer underline ml-1"
                >
                  Login to your dashboard
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
