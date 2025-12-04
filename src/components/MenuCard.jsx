import { IMG_URL } from "../utiles/Constants";

const MenuCard = ({ resinfo }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = resinfo;
  return (
    <div className="menu-res-container">
      <div className="res-name&cusine">
        {" "}
        <h1>{name}</h1>
        <p className="menu-res-cusines">{cuisines.join(",")}</p>
        <p className="menu-res-avgRating">
          <i className="bi bi-star-fill"> </i> {avgRating}
        </p>
      </div>

      <div className="menu-res-img-container">
        <img src={IMG_URL + cloudinaryImageId} alt="" />
      </div>
    </div>
  );
};
export default MenuCard;
