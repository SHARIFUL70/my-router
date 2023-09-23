import Nav from "../component/Header/Nav/Nav";
import { Outlet  } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div className=" max-w-[1200px] mx-auto ">
         <Nav></Nav>
     <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;