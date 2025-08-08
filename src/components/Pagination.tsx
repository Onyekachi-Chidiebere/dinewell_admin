'use client';

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  resultsPerPage,
  onPageChange,
}) => {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  const renderPageNumbers = () => {
    const pageNumbers: React.ReactNode[] = [];
    const pagesToShow = new Set<number | string>();

    pagesToShow.add(1);

    if (currentPage > 3) {
      pagesToShow.add('...');
    }

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pagesToShow.add(i);
    }

    if (currentPage < totalPages - 2) {
      pagesToShow.add('...');
    }

    if (totalPages > 1) {
      pagesToShow.add(totalPages);
    }

    pagesToShow.forEach((page, i) => {
      if (page === '...') {
        pageNumbers.push(<span key={`ellipsis-${i}`} style={{ padding: '8px 12px', color: '#828DA9' }}>...</span>);
      } else {
        pageNumbers.push(
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            style={{
              padding: '8px 12px',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              background: currentPage === page ? '#F1F5F9' : 'transparent',
              color: '#334155',
              cursor: 'pointer',
              fontWeight: currentPage === page ? 600 : 400,
            }}
          >
            {page}
          </button>
        );
      }
    });
    return pageNumbers;
  };

  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'flex-end',
        gap:'8px',
        alignItems: 'center',
        padding: '12px 32px',
        width: '100%',
        borderBottom: '1px solid #EBEEFF',
        fontFamily: 'var(--font-mulish)',
        fontSize: '14px',
      }}
    >
      <span style={{ color: '#828DA9' }}>
        Showing <span style={{  border:'1px solid #E2E8F0', borderRadius:'20px', padding:'4px 10px'}}><span style={{ fontWeight: 600, color: '#334155' }}>{startResult}-{endResult}</span> of <span style={{ fontWeight: 600, color: '#334155' }}>{totalResults}</span> Results
        </span>
      </span>
      <div style={{ display: 'flex', width:'1px', height:'20px', backgroundColor:'#D2D3F3'}}/>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: '8px',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            background: 'transparent',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4L6 8L10 12" stroke="#828DA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: '8px',
            borderRadius: '20px',
            border: '1px solid #E2E8F0',
            background: 'transparent',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12L10 8L6 4" stroke="#828DA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
