import { useState, useEffect } from "react";
import { RestaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData1 = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase())
  );
  //console.log(restaurants);
  // console.log(filterData1);
  return filterData1;
}

export const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [allRestaurants, setAllRestaurants] = useState(RestaurantList);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.4192141&lng=76.9884276&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;
  // if (filteredRestaurant.length === 0)
  //   return <h1>no data metch your search</h1>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, filteredRestaurant);
            // console.log(data);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant?.data?.id} />
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
