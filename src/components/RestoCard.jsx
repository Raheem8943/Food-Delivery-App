import { IMG_URL } from "../utiles/Constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div className="p-2 m-2 w-full max-w-[235px] h-[450px] bg-gray-100 rounded-[5px] flex flex-col gap-3 shadow-lg">
      <img
        className="h-[180px] w-full rounded-[5px] object-cover"
        src={IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="px-2 py-2 ">
        <div className="text-[18px] font-bold flex justify-center">{name}</div>
        <div className="py-2 flex ">{cuisines.join(" , ")}</div>

        <div className="px-2 py-2 flex font-bold text-green-400">
          {" "}
          <i className="bi bi-star-fill"> </i>
          {avgRating}
        </div>
      </div>
      {/* <div className="flex justify-center pb-2">
        <button className="bg-orange-400 px-3 py-1 rounded text-white">
          Add to Cart
        </button>
      </div> */}
    </div>
  );
};
export default RestoCard;
