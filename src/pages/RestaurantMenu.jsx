import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import MenuCard from "../components/MenuCard";
import ItemCard from "../components/ItemCard";
import { Menu_URL } from "../../Constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_URL + resId);
    const json = await data.json();
    console.log(json);
    const item = json.data;
    setResInfo(item);
  };
  console.log("resinfo", resInfo);
  if (resInfo === null) return <Shimmer />;

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards;

  if (itemCards.length === 0) return <Shimmer />;
  console.log(itemCards);
  return (
    <div className="menu-container">
      <div className="menu-res-info">
        <MenuCard
          key={resInfo?.cards[2]?.card?.card?.info.id}
          resinfo={resInfo?.cards[2]?.card?.card?.info}
        />
      </div>
      <div className="item-card">
        {itemCards.map((item) => (
          <ItemCard key={item?.card?.info?.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
