import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utiles/Constants";
import { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const CartItem = useSelector((store) => store.cart.item);
  const [logBtn, setLogbtn] = useState("Login");
  return (
    <div className="flex justify-between bg-[#923743] h-[180px] sticky top-0 z-50 shadow-lg">
      <div className="w-35 justify-center pt-2.5 pl-2 m-3">
        <img src={LOGO_IMG} alt="" />
      </div>
      <div className="flex items-center text-[#FF4500] text-6xl font-san font-bold">
        Food Asia
      </div>
      <div className="flex items-center">
        <ul className="flex items-center p-5 m-4 gap-4 text-white font-bold text-[18px]">
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
          <li className="relative flex items-center">
            {" "}
            <Link to={"/cart"} className="flex items-center justify-center">
              <i className="bi bi-bag text-6xl leading-none"></i>
              <div className="absolute mt-4 "> {CartItem.length}</div>
            </Link>
          </li>
          <button
            className="text-white font-bold px-4 w-24 text-[18px] mr-3"
            onClick={() => {
              logBtn === "Login" ? setLogbtn("Logout") : setLogbtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
