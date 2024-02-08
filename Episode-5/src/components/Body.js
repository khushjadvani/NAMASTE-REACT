// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


import RestaurantCard from "./RestarantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  //local state variable
const [ listOfRestaurent , setListOfRestaurent ] = useState(
    restaurantList
  );

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick={ () => {
              const filteredList  = restaurantList.filter
              (
                  (res ) => res.data.avgRating > 4 
              );
              setListOfRestaurent(filteredList);
            }}  
          >
             Top Rated Restaurant
          </button>
        </div>
        
        <div className="restaurant-list">
          {listOfRestaurent.map((restaurant) => {
            return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;