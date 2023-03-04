import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const onChangeInput = (e) => {
    setsearchText(e.target.value);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => onChangeInput(e)}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};

export default Body;
