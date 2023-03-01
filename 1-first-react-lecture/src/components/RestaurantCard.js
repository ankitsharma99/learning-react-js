import { PizzaHut } from "../constants";

const RestaurantCard = () => {
    return (
      <div className="card">
        <img src={PizzaHut.image} alt="pizza hut image logo" />
        <h3>{PizzaHut.name}</h3>
        <p>{PizzaHut.rating}</p>
        <p>{PizzaHut.cuisine.join(",")}</p>
      </div>
    );
  };

export default RestaurantCard;