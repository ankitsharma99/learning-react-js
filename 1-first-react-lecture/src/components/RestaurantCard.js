import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
}) => {
  return (
    <div className="w-56 p-5 m-5 shadow-xl bg-gray-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold 2xl">{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h3>{area}</h3>
      <span>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
