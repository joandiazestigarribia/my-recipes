import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginatorProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (selectedPage: { selected: number }) => void;
}

const Paginator: React.FC<PaginatorProps> = ({ totalPages,currentPage , onPageChange }) => {
    
    return (
        <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            onPageChange={onPageChange}
            containerClassName={'pagination'}
            activeClassName={'active'}
            forcePage={currentPage - 1}
        />
    );
};

export default Paginator;
