import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Nav = () => {
    return (
        <div className="flex justify-between shadow-md items-center px-3 py-3 ">
            <Logo></Logo>
            <ul className="flex text-xl gap-4">
                <li>
                <NavLink
       to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
  Home
</NavLink>
                </li>
                <li>
                <NavLink
       to="/favarit"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
  Favarit
</NavLink>
                </li>
                <li>
                <NavLink
       to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400" : ""
  }
>
 Login
</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Nav;