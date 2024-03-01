// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index


import RestaurantCard from "./RestarantCard";
// import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {

  //local state variable
const [ listOfRestaurent , setListOfRestaurent ] = useState([]);
const [ filteredRestaurant , setfilteredRestaurant ] = useState([]);


const [ searchText , setsearchText ] = useState("");


  useEffect( () => {
    fetchdata();                                                                                                             
  } , []);


  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
  
    setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // console.log(listOfRestaurent);
  };

  if(listOfRestaurent.length === 0){
    return <Shimmer/>;
  }
    return (
      <div className="body">
        <div className="filter">

          <div className="search">
            <input type="text" className="search-box"
            value={searchText} 

            onChange={ (e)=> {
              setsearchText(e.target.value);
            }}
            ></input>
            <button onClick={() =>{
              const filteredRestaurant =listOfRestaurent.filter(
                (res ) =>res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}>search</button>
          </div>

          <button className="filter-btn"  

            onClick={ () => {
              const filteredList  = listOfRestaurent.filter (
                  (res ) => res.info.avgRating > 4.5 
              );
              setListOfRestaurent(filteredList);
            }}  
          >

             Top Rated Restaurant

          </button>
        </div>
        
        <div className="restaurant-list">
          {filteredRestaurant.map((restaurant) => {
            // console.log(restaurant.info);
            return <RestaurantCard key={restaurant.info.id} {...restaurant.info} />;
          })}
        </div>
      </div>
    );
  };

  export default Body;





