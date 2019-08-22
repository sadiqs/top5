import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = props => {
  return (
    <ul className="list-group my-3">
      {props.restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default Restaurants;
