import Searchbar from "./Seachbar"
import SortUI from "./SortUI"
import { Button } from "../ui/button"
import { ChangeEvent } from "react"
import { Link } from "react-router-dom"

interface Data {
    [key: string]: string;
}


interface tableTools {
    filterCriteria:string,
    handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void,
    sortColumn:string, 
    handleColumnSort:(e: string) => void, 
    sortOption: string,
    handleSortOptionChange:(e: ChangeEvent<HTMLSelectElement>) => void 
    Details: Data[]
    buttonText:string
    buttonRoute:string
}

const TableTools:React.FC<tableTools> = (props) => {

    return(
            <div className="w-full sm:w-11/12 px-4 mt-14 py-2 flex flex-col md:flex-row bg-white md:items-center shadow-sm md:h-[100px] justify-end sm:justify-between"> {/* Center the content */}
            <div className='flex flex-col md:flex-row gap-x-2'>
            <Searchbar filterCriteria={props.filterCriteria} handleFilterChange={props.handleFilterChange} />
            <SortUI sortColumn={props.sortColumn} handleColumnSort={props.handleColumnSort} Details={props.Details} sortOption={props.sortOption} handleSortOptionChange={props.handleSortOptionChange} />
            </div>
            <Link to={props.buttonRoute}>
            <Button className='flex px-3 py-1 h-[40px] rounded-md border bg-blue-500 text-white hover:bg-blue-500 hover:text-white'>{props.buttonText}</Button>
            </Link>
            </div>
          )
}

export default TableTools 
