import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";

const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>Namaste From our Restaurant</h2>
        <h3>{restaurant?.name}</h3>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt="restaurant image"
        />
        <h3>{restaurant?.avgRating} Stars</h3>
        <h4>
          Area: {restaurant?.area}, City: {restaurant?.city}
        </h4>
      </div>
      <div>
        <h1>Menu:</h1>

        <ul>
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
