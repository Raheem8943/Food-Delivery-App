import { IMG_URL } from "../../Constants";
const RestoCard = ({ resData }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestoCard;
