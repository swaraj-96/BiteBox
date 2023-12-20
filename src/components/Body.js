import RestaurantCard, { withPromotedLabelPromoted } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

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
      "https://bitebox-swaraj.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  return (
    <div className="body bg-white">
      {/* search bar */}

      <div className="search flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6">
        <input
          type="search"
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow w-full"
          value={inputText}
          placeholder="Find Flavor Delights"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn bg-appTheme basis-2/12 text-center text-white p-2 flex justify-center gap-2 items-center md:px-8 rounded-md text-sm md:text-base font-semibold"
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
          <MagnifyingGlassIcon className="w-4 h-4" />{" "}
          <span className="hidden md:block">Search</span>
        </button>
      </div>
      {/* Filtered buttons */}

      <div className="search flex gap-2 md:gap-4 max-w-[560px] w-[90%] mx-auto mt-6 justify-between">
        <button
          className="all-btn bg-btnTheme text-center text-white p-2  justify-center gap-2 items-center md:px-4  rounded-md text-[10px] md:text-sm hover:bg-appTheme hover:text-black hover:shadow-lg font-semibold"
          onClick={() => {
            //this will show all the rest. from list of rest data(main data)
            setFilteredRestaurant(listOfRestaurants);
          }}
        >
          All
        </button>
        <button
          className="filter-btn bg-btnTheme  text-center text-white p-2  justify-center gap-2 items-center md:px-4 rounded-md text-[10px] md:text-sm hover:bg-appTheme hover:text-black hover:shadow-lg font-semibold"
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

        <button
          className="filter-btn bg-btnTheme  text-white p-2 justify-center gap-2 items-center md:px-4 rounded-md text-[10px] md:text-sm hover:bg-appTheme hover:text-black hover:shadow-lg font-semibold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info?.sla?.deliveryTime <= 20
            );
            //console.log(listOfRestaurants);
            setFilteredRestaurant(filteredList);
          }}
        >
          Fast Delivery
        </button>
        <button
          className="filter-btn bg-btnTheme  text-center text-white p-2  justify-center gap-2 items-center md:px-4 rounded-md text-[10px] md:text-sm hover:bg-appTheme hover:text-black hover:shadow-lg font-semibold"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) =>
                res.info?.costForTwo == "₹150 for two" ||
                res.info?.costForTwo == "₹120 for two" ||
                res.info?.costForTwo == "₹200 for two" ||
                res.info?.costForTwo == "₹300 for two" ||
                res.info?.costForTwo == "₹100 for two"
            );
            //console.log(listOfRestaurants);
            setFilteredRestaurant(filteredList);
          }}
        >
          Less than Rs. 300
        </button>
      </div>
      {/* restaurant list */}
      <div className="res-container container-max">
        <h1 className="my-4 mt-8 font-bold text-2xl text-zinc-700">
          Restaurants near you
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {/* //conditional rendering
       //if(listOfRestaurants == 0){
        //  return <Shimmer/>
         // }
          //conditional rendering */}

          {listOfRestaurants == 0 ? (
            Array.from({ length: 20 }).map((_, i) => <Shimmer key={i} />)
          ) : filteredRestaurant && filteredRestaurant?.length != 0 ? (
            filteredRestaurant?.map((restaurant) => (
              //this will render the filtered data
              <Link
                key={restaurant?.info.id}
                to={"/restaurants/" + restaurant?.info.id}
                className="hover:scale-95 transition ease-in-out duration-300 relative z-10"
              >
                {
                  /*if a restaurant is bestseller then add a bestseller label in it */

                  (restaurant?.info.avgRating >= 4 &&
                    restaurant?.info.costForTwo == "₹150 for two") ||
                  restaurant?.info.costForTwo == "100 for two" ? (
                    <RestaurantCardPromoted resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )
                }
              </Link>
            ))
          ) : (
            <p>No restaurant found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
