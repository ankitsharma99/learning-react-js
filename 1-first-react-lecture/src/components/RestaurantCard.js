import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "./utils/UserContext";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-8 relative max-w-xs overflow-hidden bg-cover bg-no-repeat ">
      <img
        className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="p-5">
        <h2 className="font-bold 2xl">{name}</h2>
        <h5>{cuisines.join(", ")}</h5>
        <h3>{area}</h3>
        <span>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
