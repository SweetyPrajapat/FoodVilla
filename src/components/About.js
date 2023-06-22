import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileCls from "./ProfileClass";

const About = () => {
  return (
    <div>
      <h1>About us page</h1>
      <p>This is namaste react live coures</p>
      {<Profile name={"Sweety"} />}
      {<ProfileCls name={"Pari"} />}
    </div>
  );
};

export default About;
