import { IMG_CDN_URL } from "../constants";
// const RestaurantCard = (props) => {
// const RestaurantCard = ({ restaurant }) => {
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // console.log(props);
  // const { name, cuisines, cloudinaryImageId, avgRating } = restaurant.data.data;
  // console.log(name);
  return (
    <div className="cards">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
