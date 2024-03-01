// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

import RestaurantCard from "./RestarantCard";
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { home_api } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local state variable
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  console.log("BODY RENDERed  ",listOfRestaurent);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(listOfRestaurent);
  };


  //useOnline status
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) {
    return <h1>Offline</h1>
  }

  if (listOfRestaurent == 0) return <Shimmer />;
  // if (listOfRestaurent) {
  //   console.log(listOfRestaurent.length == 0);
  //   // return <Shimmer />;
  // }
  return (
    <div className="body bg-black text-black p-4 b-4 ">
      <div className="filter flex items-center gap-4 my-4">
        <div className="search m-10 font-semibold p-2">
          <input 
            type="text"
            className="search-box px-4 py-2  border-4 border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>

          {/* console.log({filteredRestaurant}); */}

          <button
          className="search bg-green-600 p-2 font-semibold text-white" 
            onClick={() => {
              const filteredRestaurant = listOfRestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>

        {/* console.log("filteredRestaurant"); */}
         <div >   
        <button
          className="filter-btn border-4 border-x-black p-2 font-semibold bg-black text-white"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
      </div>

      <div className="restaurant-list flex flex-wrap justify-between w-auto border-2 ">
        {filteredRestaurant &&
          filteredRestaurant.length > 0 &&

          filteredRestaurant.map((restaurant) => (
            <Link className="links" 
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard  {...restaurant.info} />
              </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
