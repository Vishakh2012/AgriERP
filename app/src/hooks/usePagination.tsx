import { useState, useEffect } from "react";

interface Data {
    [key: string]: string;
}

const usePagination = (sortedData: Data[]) => {
    const PAGE_SIZE = 7;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const applyPagination = (data: Data[]) => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        return data.slice(startIndex, startIndex + PAGE_SIZE);
    };

    const pageCount: number = Math.ceil(sortedData.length / PAGE_SIZE);
    const paginatedData: Data[] = applyPagination(sortedData);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'ArrowLeft' && currentPage > 1) {
                setCurrentPage(currentPage - 1);
            } else if (e.key === 'ArrowRight' && currentPage < pageCount) {
                setCurrentPage(currentPage + 1);
            }
            if (['ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, pageCount]); // Only re-subscribe when currentPage or pageCount changes

    return { pageCount, paginatedData, handlePageChange, currentPage, PAGE_SIZE };
};

export default usePagination;

