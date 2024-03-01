// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
//   console.log("temp");

  //is a hook 
  // const [resInfo, setresInfo] = useState(null);

  //is a custome hook
  const { resId } = useParams();

  //use of custome hook
  console.log("code executed in main");
  
  const resInfo = useRestaurentMenu();


  //use to api call and [] is for it goes at once
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

  const { name ,cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

// console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)


  const { carousel } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)

    console.log(carousel)

  return (
    <>
    <div className="menu">
      <h1>{ name }</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {carousel?.map((item) => (
         <li  key={item.dish.info.id}>
            {item.dish.info.name} - RS =
            {item.dish.info.price / 100  || item.dish.info.defaultprice / 100 } /-
        </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default RestaurentMenu;

