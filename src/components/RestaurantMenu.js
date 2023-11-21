import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card || {};

  //console.log(itemCards);
  // filtering all types of menu list from the swiggy live api
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-semibold text-lg ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* accordion categories */}
      {categories.map((category) => (
        <RestaurantCategory />
      ))}
    </div>
  );
};

export default RestaurantMenu;
