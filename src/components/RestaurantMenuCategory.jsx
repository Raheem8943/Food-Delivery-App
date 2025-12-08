import { IMG_URL } from "../utiles/Constants";

const RestaurantMenuCategory = ({ category }) => {
  // const { cuisines, avgRating, cloudinaryImageId } =
  //   category.itemCards.card.info;
  console.log(category);
  return (
    <div className="restaurant_details-menu_container">
      <div className="menu-details">
        <h3>{category.title}</h3>
      </div>
      <div className="menu-img"></div>
    </div>
  );
};
export default RestaurantMenuCategory;
