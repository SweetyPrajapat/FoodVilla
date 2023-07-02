import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="max-w-screen-md max-h-fit mt-20 mx-auto my-auto mb-0">
      <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2">
        <div className="flex justify-between items-center">
          <img
            className="h-44"
            src={
              IMG_CDN_URL + restaurant.cards[0].card.card.info.cloudinaryImageId
            }
          />
          <div className="m-5">
            <h2 className="text-lg">
              {restaurant.cards[0].card.card.info.name}
            </h2>
            <h2>{restaurant.cards[0].card.card.info.cuisines.join(", ")}</h2>
            <h3>{restaurant.cards[0].card.card.info.areaName}</h3>
            <h3>{restaurant.cards[0].card.card.info.city}</h3>
            <h3>{restaurant.cards[0].card.card.info.costForTwoMessage}</h3>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-bold">Menu</h1>
        <ul>
          {/* {Object.values(
            restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
              ?.card.card.itemCards[0].card.info.items
          ).map((item) => {
            <li key={item.id}>{item.name}</li>;
          })} */}
          <div className="">
            {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => (
                <div
                  key={item.card.info.id}
                  className="flex bg-white align-center justify-between border-b-2 mt-2"
                >
                  <div className=" m-3">
                    <h1 className="text-lg font-bold">{item.card.info.name}</h1>
                    <p>
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </p>
                    <div className="text-slate-600 text-sm">
                      {/* {item.card.info.description} */}
                    </div>
                  </div>
                  <div className="grid align-center justify-center">
                    <img
                      className="w-29 h-28 rounded-lg"
                      src={IMG_CDN_URL + item.card.info.imageId}
                    />
                    <div className="flex justify-center m-1">
                      <button
                        onClick={() => addFoodItem(item)}
                        className="w-20 h-8 border border-slate-400 rounded text-green-600 "
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
