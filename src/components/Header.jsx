import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utiles/Constants";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={LOGO_IMG} alt="" />
      </div>
      <div className="App_name">Food Asia</div>
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
