import Header from "@/components/Header/Header";
import FieldsCombined from "./FieldsCombined";


const FpoDisplay = () => {

   
    return (
        <div className='w-full'>
            <div className='md:ml-4 w-full h-full'>
            <Header text="FPO Details"/>
            <FieldsCombined/>
        </div>
        </div>
    )
}

export default FpoDisplay