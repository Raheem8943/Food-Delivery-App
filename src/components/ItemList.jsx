import { IMG_URL } from "../utiles/Constants";
import { addItem } from "../DataStore/CartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAdditem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="item-details ">
      {item.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-b-[#D3D3D3]  border-b-3 pb-6 "
        >
          <div className="w-9/12">
            <h1 className="font-bold pt-2">{item?.card?.info?.name}</h1>
            <h3 className="font-bold py-3">
              ₹
              {item.card.info.defaultPrice
                ? item.card.info.defaultPrice / 100
                : item.card.info.price / 100}
            </h3>
            <h3 className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </h3>
          </div>

          <div className="item-img p-2 m-2 w-3/12 object-fill ">
            <button
              onClick={() => handleAdditem(item)}
              className="bg-white text-green-500 font-bold p-3 m-3  w-3/60 absolute mt-23 rounded-[5px] ml-13 shadow-lg cursor-pointer hover:bg-gray-200"
            >
              ADD
            </button>
            <img
              className="w-[140px] h-[120px] object-cover rounded-lg mx-auto"
              src={IMG_URL + item?.card?.info?.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
