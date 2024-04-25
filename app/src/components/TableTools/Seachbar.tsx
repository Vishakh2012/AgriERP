import { ChangeEvent } from "react" 
interface searchbarProps {
    filterCriteria: string
    handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Searchbar: React.FC<searchbarProps> = (props) => {

    return (
        <div>
            <input
                type="text"
                value={props.filterCriteria}
                onChange={props.handleFilterChange}
                placeholder="Search"
                className="w-full md:mr-2 mb-2 md:mb-0 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
        </div>
    )
}
export default Searchbar
