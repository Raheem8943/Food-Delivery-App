import useRestaurantMenu from "../utiles/useRestaurantMenu";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import RestaurantMenuCategory from "../components/RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resId);

  console.log("resinfo", resInfo);
  if (resInfo === null) return <Shimmer />;

  //  getting menu card info

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category :", categories);

  return (
    <div className="menu container">
      {/* <div className="menu-res-container flex justify-between w-6/12 p-2 m-2 ">
        <div className="res-name&cusine ">
          {" "}
          <h1>{name}</h1>
          <p className="menu-res-cusines">{cuisines.join(",")}</p>
          <p className="menu-res-avgRating">
            <i className="bi bi-star-fill"> </i> {avgRating}
          </p>
        </div>

        <div className="menu-res-img-container w-3/12">
          <img src={IMG_URL + cloudinaryImageId} alt="" />
        </div>
      </div> */}
      <div className="menu category">
        {categories.map((category) => (
          <RestaurantMenuCategory
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
