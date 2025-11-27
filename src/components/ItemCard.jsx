const ItemCard = ({ item }) => {
  const { name, category, description } = item?.card?.info || [];
  return (
    <div>
      <div className="menu-details">
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
      </div>
      <div className="menu-img"></div>
    </div>
  );
};
export default ItemCard;
