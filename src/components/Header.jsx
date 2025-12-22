import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utiles/Constants";

import { useSelector } from "react-redux";
const Header = () => {
  const CartItem = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-between bg-[#5333ed] h-[100px] sticky top-0 z-50 shadow-lg ">
      <Link to="/">
        <div className="flex items-center gap-2 pl-4 mt-3">
          <img src={LOGO_IMG} alt="logo" className="w-16 h-16 bg-white" />
          <p className="text-white text-4xl science-gothic">Food Asia</p>
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex items-center p-5 m-4 gap-4 text-white font-bold text-[18px]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center">
        <Link to={"/cart"} className="flex items-center justify-center mr-7">
          <i className="bi bi-bag-fill text-3xl leading-none text-white"></i>
          <div className="absolute ml-6 mb-1 text-xs bg-red-500 rounded-full px-1 text-white">
            {CartItem.length}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
