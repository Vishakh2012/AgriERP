import { useState, useEffect, ChangeEvent } from "react";

const useSort = (filterCriteria: string, filteredData) => {
    const [sortOption, setSortOption] = useState('');
    const [sortedData, setSortedData] = useState([]);
    const [sortColumn, setSortColumn] = useState('');

    const handleSortOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSortOption(value);
    };
    const applySorting = (data) => {
        if (sortColumn === '') return data;
        const sorted = [...data].sort((a, b) => {
            if (sortOption === 'ascending') {
                return a[sortColumn].localeCompare(b[sortColumn]);
            } else {
                return b[sortColumn].localeCompare(a[sortColumn]);
            }
        });
        return sorted;
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowUp') {
                const sortHeaderSelect = document.getElementById('sortHeaderSelect') as HTMLSelectElement;
                if (sortHeaderSelect.selectedIndex > 0) {
                    sortHeaderSelect.selectedIndex--;
                }
            }
            else if (e.key === 'ArrowDown') {
                const sortHeaderSelect = document.getElementById('sortSelect') as HTMLSelectElement;
                if (sortHeaderSelect.selectedIndex < sortHeaderSelect.options.length - 1) {
                    sortHeaderSelect.selectedIndex++;
                }
            }
            if (['ArrowUp', 'ArrowDown'].includes(e.key)) {
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    useEffect(() => {
        const sortedAndFilteredData = applySorting(filteredData);
        setSortedData(sortedAndFilteredData);
    }, [filteredData, sortColumn, sortOption]);

    const handleColumnSort = (column) => {
        setSortColumn(column);
        setSortOption('ascending');
    };



    return {handleSortOptionChange, sortOption, handleColumnSort, sortedData, sortColumn}
}
export default useSort
