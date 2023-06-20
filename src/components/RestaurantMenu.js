import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  //   const { id } = useParams();

  const [restaurant, setRestaurant] = useState({});
  // const [menu, setMenu] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=48030&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data);
    setRestaurant(json.data.cards[0].card.card.info);
    // setMenu(
    //   json.data.cards[2].groupedCard.cardGroupMap.regular.cards[1].card.card
    //     .itemCards[0]
    // );
  }

  return (
    <div>
      <h1> Restaurantr id:{id}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      <h3>{restaurant.areaName}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating}</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      {/* <h3>{console.log(restaurant.menu.items)}</h3> */}
    </div>
  );
};
export default RestaurantMenu;
