import RestaurantCard, { withPromotedLabelPromoted } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [inputText, setInputText] = useState("");

  const RestaurantCardPromoted = withPromotedLabelPromoted(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      //optional chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //copy of all resturant for search and filter purpose
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection.
      </h1>
    );

  // extracting state function from provider given by contextAPI
  const {loggedInUser, setUserName} = useContext(UserContext)

  //conditional rendering
  //if(listOfRestaurants == 0){
  //  return <Shimmer/>
  // }
  //conditional rendering
  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-16">
      <div className="filter flex py-2">
        <div className="search p-4">
          <input
            type="text"
            className="border border-solid px-2 py-2 rounded-lg shadow-lg"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg shadow-lg font-semibold"
            onClick={() => {
              //console.log(inputText)
              //below code will filteeed from main data again and again
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              );
              //setListOfRestaurants(filteredRestaurant);
              //below function will update only the duplicate data not main data
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="all-btn px-4 py-2 bg-gray-200 rounded-lg mr-4 shadow-lg font-semibold"
            onClick={() => {
              //this will show all the rest. from list of rest data(main data)
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            All
          </button>
          <button
            className="filter-btn px-4 py-2 bg-gray-200 rounded-lg shadow-lg font-semibold"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              //console.log(listOfRestaurants);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="p-4 my-4 m-4 flex items-center">
          <label className="font-semibold">UserName : </label>
        <input
            className="border border-solid px-2 py-2 rounded-lg shadow-lg ml-2"
            type="text"
            value={loggedInUser}
            //Here we use  setusername provided by contextapi in app.js via provider
            onChange={(e) => setUserName(e.target.value) }
        />
        
      </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          //this will render the filtered data
          <Link
            style={{ textDecoration: "none" }}
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              /*if a restaurant is bestseller then add a bestseller label in it */

              (restaurant?.info.avgRating >= 4.2 &&
                restaurant?.info.costForTwo == "₹150 for two") ||
              restaurant?.info.costForTwo == "100 for two" ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
