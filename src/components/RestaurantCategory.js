import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, }) => {
  //console.log(data);
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
      setShowIndex();
  };

  return (
    <div className="w-1/2 mx-auto my-4 bg-gray-100 p-4 shadow-lg ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        {/* Accordion Header */}
        <span className="font-bold text-lg">
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
