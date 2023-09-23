
import PhonesCard from "../PhonesAll/PhonesCard";


const Phones = ({data}) => {
    console.log(data)
    return (
        <div className=" mt-3">
            <h1 className="text-2xl text-center">All Catagoriy Products</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {
                data?.map(Phones => <PhonesCard key={Phones.id} Phones ={Phones}></PhonesCard>)
            }
           </div>
        </div>
    );
};

export default Phones;