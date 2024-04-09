import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./Restaurant-cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTLIST_URL } from "../utils/Common";

const Body = () => {
  //local state variable = super powerful variable
  const OnlineStatus = useOnlineStatus();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  //useEffect is called on every called if it had no dependency array

  console.log("Body rendered");

  useEffect(() => {
    console.log("Body");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTLIST_URL);

    const json = await data.json();
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  //conditional rendering one way but we can also write it using ternary operator like in line 26
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />;
  // }

  if (OnlineStatus == false) {
    return <h1>Sorry !! you lost your internet connection</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border-2 border-black m-2 rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            //filter the restaurant cards and update the ui
            //searchtext
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurants);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-2 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top-Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted == true ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
