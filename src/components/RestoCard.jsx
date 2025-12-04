import { IMG_URL } from "../utiles/Constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <p className="res_card-avg_rating">
        {" "}
        <i className="bi bi-star-fill"> </i>
        {avgRating}
      </p>
    </div>
  );
};
export default RestoCard;
