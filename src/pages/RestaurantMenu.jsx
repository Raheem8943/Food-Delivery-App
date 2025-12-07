import useRestaurantMenu from "../utiles/useRestaurantMenu";
import Shimmer from "../components/Shimmer";
import MenuCard from "../components/MenuCard";
import ItemCard from "../components/ItemCard";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resId);

  console.log("resinfo", resInfo);
  if (resInfo === null) return <Shimmer />;

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards;

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
