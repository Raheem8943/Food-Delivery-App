import useRestaurantMenu from "../utiles/useRestaurantMenu";

import { useParams } from "react-router-dom";
import RestaurantMenuCategory from "../components/RestaurantMenuCategory";
import { IMG_URL } from "../utiles/Constants";
import ShimmerMenu from "../components/ShimmerMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;

  //  getting menu card info
  const restaurantinfo = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, avgRating, cloudinaryImageId } = restaurantinfo;

  //
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu-container p-2 m-2">
      <div className="menu-res-container flex justify-between w-6/12 px-2  bg-gray-100 items-center m-auto rounded-2xl cursor-default shadow-lg">
        <div className="res-name&cusine p-2 m-2">
          {" "}
          <h1 className="font-bold text-[22px]">{name}</h1>
          <p className="menu-res-cusines pt-2">{cuisines.join(",")}</p>
          <p className="menu-res-avgRating text-green-400 font-bold">
            <i className="bi bi-star-fill"> </i> {avgRating}
          </p>
        </div>

        <div className="menu-res-img-container w-3/12 p-2 m-2">
          <img
            className="rounded-2xl "
            src={IMG_URL + cloudinaryImageId}
            alt=""
          />
        </div>
      </div>
      <div className="menu category p-2 m-2">
        {categories.map((category, index) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
