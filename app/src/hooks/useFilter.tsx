import { useState, useEffect, ChangeEvent } from "react"
interface data {
    [key: string]: string
}
const useFilter = (details: data[]) => {
    const [filterCriteria, setFilterCriteria] = useState<string>('')
    const [filteredData, setFilteredData] = useState(details)
    const handleFilterChange = (e) => {
        const { value } = e.target;
        setFilterCriteria(value);
    };
    useEffect( () => {
    setFilteredData(details.filter(invoice => {
        return Object.values(invoice).some(value =>
            value.toString().toLowerCase().includes(filterCriteria.toLowerCase())
        )
    }))
    
    }),[filterCriteria]

    return { filterCriteria, filteredData, handleFilterChange }
}

export default useFilter
