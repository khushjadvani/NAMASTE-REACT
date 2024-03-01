// Restaurant card component: Image, name, cuisine
// class="fa-solid fa-star   corresponds to a solid star icon in the Font Awesome icon set.

import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  area,
  cuisines,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  // console.log({cloudinaryImageId, name,area ,cuisines,lastMileTravelString,costForTwoString,avgRating});
  return (
    <div className="card bg-gray-300 hover:bg-gray-500 border-4 border-green-500 cursor-pointer p-2 m-8 rounded-lg">
      <img className=" img border-4 border-green-500 rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-5xl py-4">{name}</h2>
      <h4 className="font-semibold text-2xl py-2 ">{cuisines}</h4>
      <h4>{area}</h4>
      <ul>
        <span>
          <h4 className="font-semibold text-xl border-2 border-black bg-green-400">
            <i className="fa-solid fa-star "></i>
            {avgRating}
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </ul>
    </div>
  );
};

export default RestaurantCard;
