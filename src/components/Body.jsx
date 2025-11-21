import { useEffect, useState } from "react";
import RestoCard from "./RestoCard";
import { CDN_URL } from "../../Constants";
const Body = () => {
  // useState Variables
  const [restList, setRestList] = useState([]); //useState for filter
  const [btnName, setBtnName] = useState("Top Rated Restaurant"); //useState for filter button
  const [searchText, setSearchText] = useState(""); //useState for search
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  console.log("body rendered");
  //useEffect
  useEffect(() => {
    fetchData();
  }, []);

  // Data Fetching
  const fetchData = async () => {
    const data = await fetch(CDN_URL);

    //convert data in to json format
    const json = await data.json();
    console.log(json);

    // taking specific  data from API
    setRestList(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
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
      <div className="filter-container">
        {/* search button */}

        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = restList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        {/* filter button */}
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
        {filteredRestaurants.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
