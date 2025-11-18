import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
const Body = () => {
  const [restList, setRestList] = useState([]); //useState for filter
  const [btnName, setBtnName] = useState("Top Rated Restaurant"); //useState for filter button

  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // filter Function
  const topRatedRestaurants = () => {
    const filterList = restList.filter((res) => res.info.avgRating > 4.5);
    setRestList(filterList);
  };

  // filter button function
  const BtnChangeName = () => {
    setBtnName("Restaurant Above 4.5 Star");
  };

  return (
    <div className="body">
      <div className="btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            topRatedRestaurants(); //calling function
            BtnChangeName(); //calling function
          }}
        >
          {btnName}
        </button>
      </div>

      <div className="resto-container">
        {restList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
