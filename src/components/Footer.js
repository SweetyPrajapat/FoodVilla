import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="sticky top-[100vh]">
      <h4 className=" p-12 text-center text-purple-900 font-bold m-2 bg-pink-200">
        This Site is developed by {user.name}
      </h4>
    </div>
  );
};

export default Footer;
