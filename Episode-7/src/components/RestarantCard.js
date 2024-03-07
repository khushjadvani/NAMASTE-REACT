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
    <div className="card  w-[250px] bg-gray-300 hover:bg-gray-500 border-4 border-gray-500 cursor-pointer p-2 m-8 rounded-lg">
      <img
        className=" img w-12/12 border-4 border-gray-500 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="w-auto" >
        <h2 className="font-bold text-2xl py-2 ">{name}</h2>
      </div>
      <h4 className="font-semibold text-lg py-2 flex w-auto">
        {cuisines.join(", ")}
      </h4>
      <h4>{area}</h4>
      <ul>
        <span>
          <h4 className="font-semibold text-sm border-2 border-black w-3/12 bg-green-500">
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
