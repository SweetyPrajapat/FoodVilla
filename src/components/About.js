import { Outlet } from "react-router-dom";
import Profile from "./Profile";

import avif from "../assets/img/logo.avif";
import ProfileCls from "./ProfileClass";

const About = () => {
  return (
    <div className="text-center my-3">
      <h1 className="text-2xl text-purple-800">About us </h1>
      <div className="mx-96 px-24 py-4 my-0">
        <img className="h-72 " src={avif} alt="Profile alt" />
      </div>
      {<Profile name={"Sweety"} />}
      <Outlet />
    </div>
  );
};

export default About;
