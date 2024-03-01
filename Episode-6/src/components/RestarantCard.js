
// Restaurant card component: Image, name, cuisine
// class="fa-solid fa-star   corresponds to a solid star icon in the Font Awesome icon set.

import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({cloudinaryImageId, name,area ,cuisines,lastMileTravelString,costForTwoString,avgRating}) => {
    // console.log({cloudinaryImageId, name,area ,cuisines,lastMileTravelString,costForTwoString,avgRating});
  return (
      <div className="card">
        <img
          src=
            {CDN_URL +
            cloudinaryImageId }
          
        />
        <h2>{name}</h2>
        <h4>{cuisines}</h4>
        <h4>{area}</h4>
        <ul>
            <span>
              <h4><i className="fa-solid fa-star"></i>{avgRating}</h4>
              <h4>{lastMileTravelString}</h4>
              <h4>{costForTwoString}</h4>
            </span>
        </ul>
      </div>
    );
  };

  export default RestaurantCard ;