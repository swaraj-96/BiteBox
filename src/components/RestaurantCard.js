import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
      <img
        className="res-logo rounded-lg h-[40%] w-[100%]"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="res-content">
        <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
        <h4 className="font-bold text-lg">
          {resData.info.avgRating} ⭐ - {resData.info.sla.deliveryTime} mins
        </h4>
        <h4 className="text-zinc-700">
          {resData.info.cuisines.slice(0, 3).join(" , ")}
        </h4>
        <h4 className="mt-4 font-semibold">{resData.info.costForTwo}</h4>
      </div>
    </div>
  );
};

//higher order components
// (input) RestaurantCard component => (output)withPromotedLabel component

export const withPromotedLabelPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute z-0 bg-black text-white m-2 p-2 rounded-lg">
          Best Selling
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
