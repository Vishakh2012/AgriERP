import { useState, useMemo, ChangeEvent } from "react";

interface Data {
    [key: string]: string;
}

const useFilter = (details: Data[]) => {
    const [filterCriteria, setFilterCriteria] = useState<string>('');

    const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterCriteria(e.target.value);
    };

    // useMemo to calculate filtered data only when details or filterCriteria changes
    const filteredData = useMemo(() => {
        return details.filter(invoice => {
            // For each invoice, check if any value matches the filter criteria
            return Object.values(invoice).some(value =>
                value.toLowerCase().includes(filterCriteria.toLowerCase())
            );
        });
    }, [details, filterCriteria]); // Dependencies include both details and filterCriteria

    return { filterCriteria, filteredData, handleFilterChange };
}

export default useFilter;

