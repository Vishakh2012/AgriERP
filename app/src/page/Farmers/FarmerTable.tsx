import Header from '@/components/Header/Header'
import TableShow from '@/components/TableShow/TableShow'
import TableTools from '@/components/TableTools/TableTools'
import useFilter from '@/hooks/useFilter'
import usePagination from '@/hooks/usePagination'
import useSort from '@/hooks/useSort'

const farmerDetails=[
    {
        Name:'hello',
        Age:'21'
    }
    
]

const FarmerTable = () => {
    const { filterCriteria, filteredData, handleFilterChange } = useFilter(farmerDetails)
    const { handleSortOptionChange, sortOption, handleColumnSort, sortedData, sortColumn } = useSort(filterCriteria, filteredData)
    const { pageCount, paginatedData, handlePageChange, currentPage } = usePagination(sortedData)
    return (
        <div>
            <div className='m-3'>
                <Header text='Product Details' />
                <TableTools filterCriteria={filterCriteria} handleColumnSort={handleColumnSort} handleFilterChange={handleFilterChange} handleSortOptionChange={handleSortOptionChange} sortColumn={sortColumn} sortOption={sortOption} Details={farmerDetails} buttonText='Add New Farmer' buttonRoute='/farmers/forms'/>
                <TableShow pageCount={pageCount} paginatedData={paginatedData} currentPage={currentPage} handlePageChange={handlePageChange} Details={farmerDetails} PAGE_SIZE={5} edit={true} delete={true}/>
            </div>
        </div>
    )
}

export default FarmerTable