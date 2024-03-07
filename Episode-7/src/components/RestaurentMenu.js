import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { useEffect, useState } from "react";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurentMenu = () => {
  //   console.log("temp");

  //is a hook
  // const [resInfo, setresInfo] = useState(null);

  //is a custome hook
  const { resId } = useParams();

  //use of custome hook
  // console.log("code executed in main");

  const resInfo = useRestaurentMenu(resId);

  //for toggle button accorian
  const [showIndex, setshowIndex] = useState(null);

  // use to api call and [] is for it goes at once
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setresInfo(json.data);
  // };
  //   console.log(" yess !!!");
  // console.log(resInfo?.cards[0]?.card?.card?.info)
  // console.log(resInfo?.cards)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)

  const { carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(carousel)

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <>
      <div className="menu p-2 m-2 bg-black text-white">
        <div className="menu p-10 border border-gray-200 border-b-2 rounded">
          <h1 className="font-bold text-5xl flex justify-center bg-gray-600 ">
            {name}
          </h1>
          <p className="font-bold text-xl flex  justify-center bg-gray-600 py-3  ">
            {cuisines.join(", ")} - {costForTwoMessage}
          </p>
        </div>
        {/* <ul className="list pl-[330px] bg-gray-700">
          {carousel?.map((item) => (
            <li className="p-3" key={item.dish.info.id}>
              {item.dish.info.name} - RS =
              {item.dish.info.price / 100 || item.dish.info.defaultprice / 100}{" "}
              /-
            </li>
          ))}
        </ul> */}

        <div className="">
          {categories.map((category, index) => {
            return (
              <RestaurantCategory
                key={category?.card?.card?.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setshowIndex={() => setshowIndex(index)}
                
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurentMenu;
