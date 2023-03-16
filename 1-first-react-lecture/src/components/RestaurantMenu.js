import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "./utils/useRestaurant";
import { addItem } from "./utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetails = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   // dispatch action
  //   dispatch(addItem("grapes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
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
      {/* <div>
        <button
          className="m-5 p-2 bg-green-100"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div> */}
      <div className="p-5">
        <h1>Menu:</h1>

        <ul data-testid="menu">
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button
                data-testid="add-btn"
                className="p-2 m-5 bg-green-100"
                onClick={() => addFoodItem(item)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
