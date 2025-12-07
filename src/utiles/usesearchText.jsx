// import { useState, useEffect } from "react";
// import useRestList from "./useRestList";

// const usesearchText = () => {
//   const [searchText, setSearchText] = useState("");
//   const [restList, setFilteredRestaurants] = useRestList;

//   useEffect(() => {
//     const filteredRestaurants = restList.filter((res) =>
//       res.info.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredRestaurants(filteredRestaurants);
//   }, [searchText, restList]);
//   return searchText;
// };
// export default usesearchText;
