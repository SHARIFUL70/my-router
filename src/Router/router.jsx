import {createBrowserRouter} from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../page/Home/Home";
import Favarit from "../page/Favarit/Favarit";
import Login from "../page/Login/Login";
import Errorpage from "../page/errorpage/Errorpage";
import Phone from "../page/Phone/Phone";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Errorpage></Errorpage>,
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
        },
        {
          path:'/phones/:id',
          element:<Phone></Phone>,
          loader: () => fetch('/data.json')
          
        }
      ]
    },
  ]);

export default router;