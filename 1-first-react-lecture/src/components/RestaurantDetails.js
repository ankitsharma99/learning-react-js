import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "../components/Shimmer";

const RestaurantDetails = () => {
  const params = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=44058"
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.7040592&lng=77.10249019999999&menuId=44058"
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
  }

  return restaurant ? (
    <div>
      <div>
        <h1>Restaurant id: {params.id}</h1>
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
          {restaurant ? (
            restaurant.menu ? (
              restaurant.menu.items ? (
                Object.values(restaurant.menu.items).map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))
              ) : (
                <li>Not Found</li>
              )
            ) : (
              <li>Not Found</li>
            )
          ) : (
            <li>Not Found</li>
          )}
        </ul>
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default RestaurantDetails;
