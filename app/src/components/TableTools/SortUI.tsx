import { ChangeEvent } from "react"

interface Data {
    [key: string]: string;
}

interface SortUIProps {
    sortColumn: string,
    handleColumnSort: (e: string) => void,
    Details: Data []
    sortOption: string,
    handleSortOptionChange: (e: ChangeEvent<HTMLSelectElement>) => []
}
const SortUI: React.FC<SortUIProps> = (props) => {
    return (
        <div>
            <select
                id="sortHeaderSelect"
                value={props.sortColumn}
                onChange={(e) => { props.handleColumnSort(e.target.value) }}
                className="mr-2 mb-2 sm:mb-0 w-full sm:w-[90px] px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            >
                <option value="">Sort By</option>
                {Object.keys(props.Details[0]).map(column => (
                    <option key={column} value={column}>{column}</option>
                ))}
            </select>
            <select
                id="orderSelect"
                value={props.sortOption}
                onChange={props.handleSortOptionChange}
                className="mr-2 mb-2 sm:mb-0 px-3 py-2 w-full sm:w-[90px] rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            >
                <option value="">Order</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </div >
    )
}
export default SortUI
