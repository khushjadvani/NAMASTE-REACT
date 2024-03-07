import { CDN_URL } from "../utils/constant";


const ItemList = ({ items  }) => {
  // console.log("items2");
  // console.log("items");

  // console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border border-gray-800 border-b-2 border-b-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py -2">
              <span> {item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultprice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <div className="p-2 mx-1  rounded-lg bg-black text-white shadow-lg "> Add +</div>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-auto "></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
