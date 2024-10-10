import logo from "../assets/images/logo-icon.png";
import schoolimg from "../assets/images/school-img.png";
import schoolIcon from "../assets/images/school-icon.png";
import teacherIcon from "../assets/images/teacher-icon.png";
import studentIcon from "../assets/images/student-icon.png";
import keyIcon from "../assets/images/key-icon.png";
import gaurdianIcon from "../assets/images/gaurdian-icon.png";
import heroOne from "../assets/images/hero-image-1.png";
import heroTwo from "../assets/images/hero-image-2.png";
import studentIconWhite from "../assets/images/student-icon-white.png";
import schoolIconWhite from "../assets/images/school-icon-white.png";
import gaurdianIconWhite from "../assets/images/gaurdian-icon-white.png";
import teachersIconWhite from "../assets/images/teachers-icon-white.png";
import schoolImgIpad from "../assets/images/school-img-ipad.png";
import profile from "../assets/images/profile.png";

import avatar from "../assets/images/avatar.png";

const Logo = () => {
  return <img src={logo} alt="logo" />;
};
const Profile = () => {
  return (
    <img
      src="https://www.gravatar.com/avatar/?d=mp"
      alt="profile"
      style={{ borderRadius: "50%" }}
    />
  );
};
const TeachersIconWhite = () => {
  return <img src={teachersIconWhite} alt="logo" />;
};
const SchoolImgIpad = () => {
  return <img src={schoolImgIpad} alt="logo" />;
};

const StudentIconWhite = () => {
  return <img src={studentIconWhite} alt="logo" />;
};
const SchoolIconWhite = () => {
  return <img src={schoolIconWhite} alt="logo" />;
};
const GaurdianIconWhite = () => {
  return <img src={gaurdianIconWhite} alt="logo" />;
};

const KeyIcon = () => {
  return <img src={keyIcon} alt="passcode" />;
};
const GaurdianIcon = () => {
  return <img src={gaurdianIcon} alt="gaurdian" />;
};
const HeroOne = () => {
  return <img src={heroOne} alt="hero" />;
};
const HeroTwo = () => {
  return <img src={heroTwo} alt="hero" />;
};
const SchoolBg = () => {
  return <img src={schoolimg} alt="logo" />;
};
const TeacherIcon = () => {
  return <img src={teacherIcon} alt="teacher" />;
};

const SchoolIcon = () => {
  return <img src={schoolIcon} alt="admin" />;
};
const StudentIcon = () => {
  return <img src={studentIcon} alt="student" />;
};

export {
  Logo,
  SchoolBg,
  TeacherIcon,
  StudentIcon,
  StudentIconWhite,
  SchoolIconWhite,
  SchoolIcon,
  KeyIcon,
  GaurdianIcon,
  GaurdianIconWhite,
  HeroOne,
  HeroTwo,
  TeachersIconWhite,
  SchoolImgIpad,
  Profile,
};
