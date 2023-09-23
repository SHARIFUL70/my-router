import Banner from "../../component/Header/Banner";
import Phones from "../../component/Phones/Phones";

import {useLoaderData } from "react-router-dom";
  
const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <Banner></Banner>
            <Phones data ={data}></Phones>
        </div>
    );
};

export default Home;