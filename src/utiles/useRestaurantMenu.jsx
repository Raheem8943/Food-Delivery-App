import { useEffect, useState } from "react";
import { Menu_URL } from "./Constants";

const useRestaurantMenu = (resId) => {
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
  return resInfo;
};
export default useRestaurantMenu;
