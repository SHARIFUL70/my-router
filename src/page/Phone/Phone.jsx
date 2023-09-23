import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "../../component/Phones/Phone/PhoneCard";


const Phone = () => {

    const [phone,setphone] = useState()
    const {id} = useParams()
    const phones = useLoaderData()
   
  useEffect(()=>{

    const findphone = phones.find(phone => phone.id === id)
   
   setphone(findphone)

  },[])

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;