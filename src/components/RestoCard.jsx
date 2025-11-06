const RestoCard = ({ resData }) => {
  console.log("rest", resData);
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
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
