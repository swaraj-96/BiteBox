import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({ data, showItems, setShowIndex, }) => {
  //console.log(data);
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
      setShowIndex();
  };

  return (
    <div className=" p-4 my-4 bg-white shadow-lg items-center rounded-md dark:bg-[#1E2836]">
      <div
        className="flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        {/* Accordion Header */}
        <span className="text-lg font-semibold dark:text-white">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
