import Title from "./Title";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const loggedInUser = () => {
//   return true;
// };
//2 types of routing
//1. client side
//2. server side

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // console.log("render");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sticky top-0 ">
      <Title />
      <div className="my-10">
        <ul className="flex">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>

          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 mr-20">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      {/* <span className="p-10 font-bold text-red-900">{user.name}</span> */}
      {/* {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )} */}
    </div>
  );
};
