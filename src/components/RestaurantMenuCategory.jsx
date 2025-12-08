import ItemList from "./ItemList";

const RestaurantMenuCategory = ({ category, showItem, setShowIndex }) => {
  const categoryClick = () => {
    setShowIndex();
  };
  return (
    <div className="restaurant_details-menu_container w-6/12 m-auto cursor-pointer ">
      {/* header of accordian */}
      <div className="menu-details  p-4 m-4 shadow-lg rounded-[13px] border-b-gray-300">
        <div className="flex justify-between pb-5" onClick={categoryClick}>
          <span className="font-bold text-[18px]">
            {category.title} ({category.itemCards.length})
          </span>
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        <div>
          {/* body of accordian */}
          {showItem && (
            <ItemList
              key={category?.itemCards?.card?.info?.id}
              item={category?.itemCards}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenuCategory;
