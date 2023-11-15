import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card " style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <div className="res-content">
          <h3>{resData.info.name}</h3>
          <h4 className="cuisine-info">{resData.info.cuisines.join(" , ")}</h4>
          <h4>{resData.info.avgRating} star</h4>
          <h4>{resData.info.costForTwo}</h4>
          <h4>{resData.info.sla.deliveryTime} min</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard;