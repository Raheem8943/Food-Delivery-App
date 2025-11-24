import { useEffect, useState } from "react";
import { Menu_URL } from "../../Constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_URL);
    const json = data.json();
    console.log(json);
    setResInfo(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards[1]?.info
    );
    console.log(resInfo);
  };
  return (
    <div className="menu-container">
      <div className="rest-details">
        <h1>Menu Page</h1>
      </div>
    </div>
  );
};
export default RestaurantMenu;
