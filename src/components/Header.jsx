import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
          alt=""
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            {" "}
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
