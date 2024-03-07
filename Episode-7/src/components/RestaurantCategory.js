import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setshowIndex }) => {
  // console.log(data);

  // console.log(data?.itemCards);

  //for toggle
  // const [showItems , setshowItems] = useState( false ); 
  const handleClick = () => {
    setshowIndex();
    // setshowItems(!showItems);
  };


  return (
    <div>
      <div className="w-6/12 mx-auto my-4 rounded-lg bg-gray-800 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-xl font-semibold ">
            {" "}
            {data.title} ({data?.itemCards?.length})
          </span>
          <span justify-content="end"> 🔽</span>
        </div>

        {showItems && <ItemList items={data?.itemCards} />}
        {/* showItems={index === showIndex ? true : false} */}
      

      </div>
    </div>
  );
};

export default RestaurantCategory;
