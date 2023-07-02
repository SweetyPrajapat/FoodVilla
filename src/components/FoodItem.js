import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, imageId, defaultPrice }) => {
  return (
    <div className="flex">
      <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 grid align-center justify-center">
        <h2 className="text-lg font-bold">{name}</h2>
        {/* <h3>{description}</h3> */}
        <h4>Rupees : {defaultPrice / 100}</h4>
      </div>
      <img className="w-29 h-28 rounded-lg" src={IMG_CDN_URL + imageId} />
      <button className="m-6 border border-green-800 rounded text-green-600  w-28 h-12 ">
        Remove
      </button>
    </div>
  );
};
export default FoodItem;
