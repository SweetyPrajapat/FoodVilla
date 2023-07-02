import { IMG_CDN_URL } from "../constants";
// const RestaurantCard = (props) => {
// const RestaurantCard = ({ restaurant }) => {
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  //user,
}) => {
  // console.log(props);
  // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data.data;
  // console.log(name);
  return (
    <div className="w-56 p-2 m-2 shadow-md bg-purple-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{}</h4>
    </div>
  );
};

export default RestaurantCard;
