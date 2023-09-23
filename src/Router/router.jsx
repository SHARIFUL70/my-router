import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/Home/Home";
import Favarit from "../page/Favarit/Favarit";
import Login from "../page/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path: '/',
            element:<Home></Home>,
            loader: ()=> fetch('/data.json')
            
        },
        {
          path: '/favarit',
          element: <Favarit></Favarit>
        },
        {
          path: '/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

export default router;