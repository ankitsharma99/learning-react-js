import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=44058"
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=28.7040592&lng=77.10249019999999&menuId=" +
        id
    );
    const json = await data.json();

    console.log(json.data);
    setRestaurant(json.data);
  }
  return restaurant;
};

export default useRestaurant;
