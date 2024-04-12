import Header from '@/components/Header/Header';
import useFilter from '@/hooks/useFilter';
import useSort from '@/hooks/useSort';
import usePagination from '@/hooks/usePagination';
import TableTools from '@/components/TableTools/TableTools';
import TableShow from '@/components/TableShow/TableShow';

const productDetails = [
    {
        category: "Electronics",
        name: "Smartphone",
        hsn: "123456",
        itemCode: "ITEM001",
        price: "$500.00",
        tax: "$50.00",
        currentStock: "100",
    },
    {
        category: "Electronics",
        name: "Laptop",
        hsn: "789012",
        itemCode: "ITEM002",
        price: "$1000.00",
        tax: "$100.00",
        currentStock: "50",
    },
    {
        category: "Clothing",
        name: "T-Shirt",
        hsn: "345678",
        itemCode: "ITEM003",
        price: "$20.00",
        tax: "$2.00",
        currentStock: "200",
    },
    {
        category: "Clothing",
        name: "Jeans",
        hsn: "901234",
        itemCode: "ITEM004",
        price: "$50.00",
        tax: "$5.00",
        currentStock: "150",
    },
    {
        category: "Books",
        name: "Novel",
        hsn: "567890",
        itemCode: "ITEM005",
        price: "$15.00",
        tax: "$1.50",
        currentStock: "300",
    },
    {
        category: "Books",
        name: "Textbook",
        hsn: "234567",
        itemCode: "ITEM006",
        price: "$80.00",
        tax: "$8.00",
        currentStock: "100",
    },
    {
        category: "Home Appliances",
        name: "Refrigerator",
        hsn: "890123",
        itemCode: "ITEM007",
        price: "$800.00",
        tax: "$80.00",
        currentStock: "80",
    },
    {
        category: "Home Appliances",
        name: "Microwave Oven",
        hsn: "456789",
        itemCode: "ITEM008",
        price: "$200.00",
        tax: "$20.00",
        currentStock: "120",
    },
    {
        category: "Furniture",
        name: "Sofa",
        hsn: "123450",
        itemCode: "ITEM009",
        price: "$700.00",
        tax: "$70.00",
        currentStock: "60",
    },
    {
        category: "Furniture",
        name: "Bed",
        hsn: "678901",
        itemCode: "ITEM010",
        price: "$600.00",
        tax: "$60.00",
        currentStock: "70",
    },
    {
        category: "Kitchenware",
        name: "Cookware Set",
        hsn: "234567",
        itemCode: "ITEM011",
        price: "$100.00",
        tax: "$10.00",
        currentStock: "200",
    },
    {
        category: "Kitchenware",
        name: "Cutlery Set",
        hsn: "789012",
        itemCode: "ITEM012",
        price: "$50.00",
        tax: "$5.00",
        currentStock: "150",
    },
    {
        category: "Sporting Goods",
        name: "Tennis Racket",
        hsn: "345678",
        itemCode: "ITEM013",
        price: "$80.00",
        tax: "$8.00",
        currentStock: "100",
    },
    {
        category: "Sporting Goods",
        name: "Football",
        hsn: "901234",
        itemCode: "ITEM014",
        price: "$30.00",
        tax: "$3.00",
        currentStock: "200",
    },
    {
        category: "Beauty",
        name: "Perfume",
        hsn: "567890",
        itemCode: "ITEM015",
        price: "$50.00",
        tax: "$5.00",
        currentStock: "150",
    },
    {
        category: "Beauty",
        name: "Makeup Kit",
        hsn: "234567",
        itemCode: "ITEM016",
        price: "$40.00",
        tax: "$4.00",
        currentStock: "180",
    },
    {
        category: "Tools",
        name: "Drill Machine",
        hsn: "890123",
        itemCode: "ITEM017",
        price: "$120.00",
        tax: "$12.00",
        currentStock: "90",
    },
    {
        category: "Tools",
        name: "Screwdriver Set",
        hsn: "456789",
        itemCode: "ITEM018",
        price: "$25.00",
        tax: "$2.50",
        currentStock: "250",
    },
    {
        category: "Toys",
        name: "Action Figure",
        hsn: "123450",
        itemCode: "ITEM019",
        price: "$15.00",
        tax: "$1.50",
        currentStock: "300",
    },
    {
        category: "Toys",
        name: "Doll",
        hsn: "678901",
        itemCode: "ITEM020",
        price: "$10.00",
        tax: "$1.00",
        currentStock: "400",
    },
    {
        category: "Jewelry",
        name: "Necklace",
        hsn: "234567",
        itemCode: "ITEM021",
        price: "$200.00",
        tax: "$20.00",
        currentStock: "50",
    },
    {
        category: "Jewelry",
        name: "Earrings",
        hsn: "789012",
        itemCode: "ITEM022",
        price: "$100.00",
        tax: "$10.00",
        currentStock: "80",
    },
    {
        category: "Electricals",
        name: "LED Bulb",
        hsn: "345678",
        itemCode: "ITEM023",
        price: "$5.00",
        tax: "$0.50",
        currentStock: "500",
    },
    {
        category: "Electricals",
        name: "Extension Cord",
        hsn: "901234",
        itemCode: "ITEM024",
        price: "$15.00",
        tax: "$1.50",
        currentStock: "200",
    },
];



const Product_Display = () => {
    const { filterCriteria, filteredData, handleFilterChange } = useFilter(productDetails)
    const { handleSortOptionChange, sortOption, handleColumnSort, sortedData, sortColumn } = useSort(filterCriteria, filteredData)
    const { pageCount, paginatedData, handlePageChange, currentPage, PAGE_SIZE } = usePagination(sortedData)
    return (
        <div className='w-full'>
            <div className='md:ml-4 w-full h-screen'>
                <Header text='Product Details' />
                <TableTools filterCriteria={filterCriteria} handleColumnSort={handleColumnSort} handleFilterChange={handleFilterChange} handleSortOptionChange={handleSortOptionChange} sortColumn={sortColumn} sortOption={sortOption} Details={productDetails} buttonText='Add New Product' buttonRoute='/product/forms' />
                <TableShow edit={true} delete={true} pageCount={pageCount} paginatedData={paginatedData} currentPage={currentPage} handlePageChange={handlePageChange} Details={productDetails} PAGE_SIZE={PAGE_SIZE} />
            </div>
        </div>
    )

}


export default Product_Display
