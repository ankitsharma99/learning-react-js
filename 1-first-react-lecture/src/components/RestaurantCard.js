const RestaurantCard = ({ image, name, rating, cuisine }) => {
  return (
    <div className="card">
      <img src={image} alt="pizza hut image logo" />
      <h3>{name}</h3>
      <p>{rating}</p>
      <p>{cuisine.join(",")}</p>
    </div>
  );
};

export default RestaurantCard;
