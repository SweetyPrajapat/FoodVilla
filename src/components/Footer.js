import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className=" w-full bottom-1 bg-pink-200 text-purple-900 flex justify-center ">
      <h4 className="h-20 flex justify-center items-center">
        This Site is developed by {user.name}
      </h4>
    </div>
  );
};

export default Footer;
