import { StarIcon } from "@heroicons/react/24/outline";
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <>
      <div className=" dark:shadow-xl dark:rounded-t-md">
        <div className="overlay-container">
          <img
            className="res-logo relative w-full min-h-[180px] overflow-hidden aspect-video object-cover block rounded-md"
            src={CDN_URL + resData.info.cloudinaryImageId}
          />
          <div className="overlay w-full rounded-md p-2 px-3 ">
            <p className="text-xl font-bold flex gap-2 flex-wrap">
              {resData.info?.aggregatedDiscountInfoV3?.header
                ? resData.info.aggregatedDiscountInfoV3.header
                : ""}{" "}
              {resData.info?.aggregatedDiscountInfoV3?.subHeader
                ? resData.info.aggregatedDiscountInfoV3.subHeader
                : ""}
            </p>
          </div>
        </div>
        <h2 className="text-lg font-bold mt-2 text-zinc-800 truncate dark:text-white">
          {resData.info.name}
        </h2>

        <p className="font-bold text-zinc-800 text-md dark:text-white">
          {resData.info.avgRating} ⭐ • {resData.info.sla.deliveryTime} mins
        </p>

        <h4 className="text-zinc-700 truncate dark:text-slate-400">
          {resData.info.cuisines.join(" , ")}
        </h4>
        <p className="text-zinc-600 dark:text-slate-400">{resData.info?.areaName}</p>
        <h4 className="text-zinc-700 font-bold dark:text-white">{resData.info?.costForTwo}</h4>
      </div>
    </>
  );
};

//higher order components
// (input) RestaurantCard component => (output)withPromotedLabel component

export const withPromotedLabelPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-10 -top-2 -left-2 rounded-md p-2 px-4 bg-zinc-900 text-white text-xs dark:bg-[#374151]">
          Best Selling
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
