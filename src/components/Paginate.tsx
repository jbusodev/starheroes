import React from 'react';
import { usePaginate } from '../hooks/usePaginate';

interface PaginatorProps {
  count: number;
}

const Pagination: React.FC<PaginatorProps> = ({ count }) => {
  const { currentPage, setPage } = usePaginate();
  const maxPages = Math.ceil(count / 10)

  return (
    <>
      <div className='justify-content-center align-items-center w-100 d-flex'>
        <button onClick={() => setPage(currentPage - 1)} disabled={currentPage===1} >Previous</button>
        <div className='p-3'>{currentPage} of {maxPages}</div>
        <button onClick={() => setPage(currentPage + 1)} disabled={currentPage===maxPages}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
