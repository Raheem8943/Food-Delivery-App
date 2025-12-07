import { useState, useEffect } from "react";
import { CDN_URL } from "./Constants";
const useRestList = () => {
  const [restList, setRestList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Data Fetching
  const fetchData = async () => {
    const data = await fetch(CDN_URL);
    //convert data in to json format
    const json = await data.json();

    // taking specific  data from API
    setRestList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [restList, filteredRestaurants, setFilteredRestaurants];
};
export default useRestList;
