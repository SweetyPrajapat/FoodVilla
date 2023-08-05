import { useState, useEffect, useContext } from "react";
import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import Offline from "./Offline";
import useOnline from "../utils/useOnline";
//import UserContext from "../utils/UserContext";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [allRestaurants, setAllRestaurants] = useState(RestaurantList);
  //const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(json?.data?.cards[0]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <Offline />;
  }

  if (!allRestaurants) return null;
  // if (filteredRestaurant.length === 0)
  //   return <h1>no data metch your search</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <div className="text-center">
          <input
            type="text"
            className="bg-zinc-100 rounded-md focus:bg-pink-200 p-2 m-2"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-2 m-2 bg-purple-900 hover:bg-pink-900 text-white rounded-md"
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              // console.log(data);
              if (searchText === "") {
                setFilteredRestaurant(allRestaurants);
              }
              setFilteredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
        {/* getting dynamic value change on page
         <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>

        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input> */}
      </div>
      <div className="flex w-full flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <div className="hover:blur-none">
                <RestaurantCard {...restaurant.info} />
              </div>
            </Link>
          );
        })}
        {/* <RestaurantCard {...RestaurantList[0].data.data} />
		<RestaurantCard {...RestaurantList[1].data.data} />
		<RestaurantCard {...RestaurantList[2].data.data} />
		<RestaurantCard {...RestaurantList[3].data.data} />
		<RestaurantCard {...RestaurantList[4].data.data} />
		<RestaurantCard {...RestaurantList[5].data.data} /> */}
        {/* <RestaurantCard restaurant={RestaurantList[5]} /> */}
        {/* <RestaurantCard name={RestaurantList[5].data.data.name} cuisines = {RestaurantList[0].data.data.cuisines} /> */}
      </div>
    </>
  );
};
export default Body;
