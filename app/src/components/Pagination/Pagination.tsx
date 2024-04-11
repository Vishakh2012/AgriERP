interface PaginationProps {
    pageCount : number,
    currentPage : number,
    handlePageChange: (curr: number) => void
}
const Pagination: React.FC<PaginationProps> = ({ pageCount, currentPage, handlePageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: pageCount }, (_, i) => (
                <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`mx-1 px-3 py-1 rounded-full border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white border-gray-300'}`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
)
}
export default Pagination
