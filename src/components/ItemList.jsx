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

          <div className="item-img p-2 m-2 w-3/12 object-fill relative">
            <img
              className="w-[140px] h-[120px] object-cover rounded-lg mx-auto"
              src={IMG_URL + item?.card?.info?.imageId}
              alt=""
            />
            <button
              onClick={() => handleAdditem(item)}
              className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 bg-white text-green-600 font-extrabold py-2 px-6 shadow-lg rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out border border-gray-100"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

