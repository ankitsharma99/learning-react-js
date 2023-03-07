import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Restaurant id: {params.id}</h1>
      <h2>Namaste From our Restaurant</h2>
    </div>
  );
};

export default RestaurantDetails;
