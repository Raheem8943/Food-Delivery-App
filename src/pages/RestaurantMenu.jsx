import { useEffect } from "react";
import { Menu_URL } from "../../Constants";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(Menu_URL);

    const json = data.json();
    console.log(json);
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
