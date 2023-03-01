import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const onChangeInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value=""
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
