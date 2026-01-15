import { NavLink, Link } from "react-router-dom";
import { LOGO_IMG } from "../utiles/Constants";

import { useSelector } from "react-redux";
const Header = () => {
  const CartItem = useSelector((store) => store.cart.item);

  return (
    <div className="flex justify-between bg-[#5333ed] h-[100px]  sticky top-0 z-50 shadow-lg ">
      <NavLink to="/">
        <div className="flex items-center gap-2 pl-4 mt-3">
          <img src={LOGO_IMG} alt="logo" className="w-16 h-16 bg-white" />
          <p className="text-white text-4xl science-gothic">Food Asia</p>
        </div>
      </NavLink>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <ul className="flex items-center gap-8 font-bold text-[18px]">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-cyan-300" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-cyan-300" : "text-white"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-cyan-300" : "text-white"
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center">
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            `flex items-center justify-center mr-7 ${
              isActive ? "text-cyan-300" : "text-white"
            }`
          }
        >
          <i className="bi bi-bag-fill text-3xl leading-none "></i>
          {CartItem.length > 0 && (
            <div className="absolute ml-6 mb-1 text-xs bg-red-500 rounded-full px-1 text-white">
              {CartItem.length}
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
