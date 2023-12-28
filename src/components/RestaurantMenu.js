import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerRestaurant from "./ShimmerRestaurant";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <ShimmerRestaurant/>;

  const {
    areaName,
    avgRatingString,
    cuisines,
    costForTwoMessage,
    name,
    sla,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  // filtering all types of menu list from the swiggy live api
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  //revise it
  const setShowIndexProps = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };


  return (
    <div  className='container-md my-8'>
      {/* restaurant info */}
      <div className="flex justify-between items-center pb-4 border-b border-dashed dark:border-gray-700">
        <div>
          <h2 className="text-xl font-bold my-2 dark:text-white">{name}</h2>
          <p className="text-xs text-gray-500 dark:text-slate-400">{cuisines.join(", ")}</p>
          <p className="text-xs text-gray-500 dark:text-slate-400">
            {areaName}, {sla.lastMileTravelString}
          </p>
          <p className="font-semibold text-xs text-gray-500 dark:text-slate-400">
            {costForTwoMessage}
          </p>
        </div>
        <div className="border rounded-md font-bold  p-2 text-sm">
          <p className="flex-center gap-1 mb-2 text-green-500 ">
            ⭐ {avgRatingString}
          </p>
          <p className="pt-2 border-t text-xs font-normal text-gray-500 dark:text-slate-400">
            {totalRatingsString}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-2">
      <h3 className="font-semibold text-gray-500 py-2 text-base dark:text-slate-400">~ M E N U ~</h3>
      </div>
       
      {/* accordion categories */}
      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          //revise it
          setShowIndex={() => setShowIndexProps(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
