import "../../assets/css/admin/navbar.css";
import { Profile } from "../images";
import { SlArrowDown } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { SlLogout } from "react-icons/sl";
import { useState } from "react";
import MobileSideBar from "./MobileSideBar";
import { Link } from "react-router-dom";
import { useGetUserProfileQuery } from "../../app/api/userApi";
import { logOut } from "../../app/features/authSlice";

import { useSelector } from "react-redux";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const { _ } = useGetUserProfileQuery();
  const { user, isLoading } = useSelector((state) => state.user);

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const rotateIconClass = isOpen ? "rotate-upside-down" : "";

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <article className="admin-navbar sticky top-0 z-50 bg-white shadow-md">
      <section className="admin-navbar-home">
        <div>
          <MobileSideBar />
        </div>
        <Link to="/">
          <h3 className="cursor-pointer">Dashboard</h3>
        </Link>
      </section>
      <section className="admin-nav-search">
        <input type="text" placeholder="Search here..." />
      </section>
      <section>
        <div className="flex items-center w-[50px] gap-2  ">
          <Profile />
          <div>
            <SlArrowDown
              className={`navbar-arrow ${rotateIconClass}`}
              onClick={toggleProfile}
            />
          </div>
          <div className={`navbar-dropdown ${isOpen ? "block" : "none"}`}>
            <div className="navbar-dropdown-profile">
              <div className="profile-size ">
                <Profile />
              </div>
              <div>
                <h6>{isLoading ? <Loader /> : user.username}</h6>
                <p>{isLoading ? <Loader /> : user.role}</p>
              </div>
            </div>
            <div className="navbar-dropdown-content">
              {/* Settings Link */}
              <div>
                <BsPerson />
                <Link to="/admin/settings">Settings</Link>
              </div>

              <div onClick={logout}>
                <SlLogout />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*to trigger mobile sidebar */}
    </article>
  );
};

export default Navbar;
