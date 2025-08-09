'use client';

import React from 'react';
import Pagination from './Pagination';


interface AnalyticsItem {
  key: string;
  label: string;
  count: number;
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  resultsPerPage: number;
  onPageChange: (page: number) => void;
}

interface TableProps {
  title: string;
  analytics: AnalyticsItem[];
  headers: string[];
  data: Record<string, any>[];
  renderCell: (header: string, value: any, row: Record<string, any>) => React.ReactNode;
  activeAnalyticsKey: string;
  onAnalyticsItemClick: (key: string) => void;
  pagination?: PaginationProps;
}

const Table: React.FC<TableProps> = ({ title, analytics, headers, data, renderCell, activeAnalyticsKey, onAnalyticsItemClick, pagination }) => {
  return (
    <div>   
    {pagination && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            totalResults={pagination.totalResults}
            resultsPerPage={pagination.resultsPerPage}
            onPageChange={pagination.onPageChange}
          />
        )}
    <div style={{ display: 'flex', gap: '16px', fontFamily: 'var(--font-mulish)', padding: '16px 32px' }}>
      {/* Analytics Sidebar */}
      <aside style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {analytics.map((item) => {
          const isActive = item.key === activeAnalyticsKey;
          return (
            <div
              key={item.key}
              onClick={() => onAnalyticsItemClick(item.key)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '40px',
                background: isActive ? '#9B87F6' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#828DA9',
                border: !isActive ? '1px solid #E2E8F0' : 'none',
                fontFamily: 'var(--font-red-hat-display)',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <span>{item.label}</span>
              <span style={{ background: isActive ? 'rgba(255,255,255,0.2)' : '#F1F5F9', padding: '2px 8px', borderRadius: '40px', fontSize: '12px' }}>
                {item.count}
              </span>
            </div>
          );
        })} 
      </aside>

      {/* Main Table Content */}
      <main style={{ flex: 1, background: '#FFFFFF', borderRadius: '12px' }}>
        {/* Table Header */}
        <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #E2E8F0' }}>
          <h2 style={{ fontFamily: 'var(--font-maven-pro)', fontWeight: 700, fontSize: '16px', padding: '0 10px', color: '#828DA9', margin: 0, textTransform: 'uppercase' }}>
            {title}
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9', fontSize: '12px', cursor: 'pointer' }}>Refresh Table</button>
            <button style={{ background: '#fff', border: '1px solid #D2D3F3', borderRadius: '24px', padding: '8px 16px', color: '#828DA9', fontSize: '12px', cursor: 'pointer' }}>All Status</button>
          </div>
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{  borderBottom: '1px solid #E2E8F0' }}>
              {headers.map((header) => (
                <th key={header} style={{ padding: '12px 16px', textAlign: 'left', color: '#828DA9', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase'}}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                 <div    style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor:'#D2D3F3' }} /> {header}
                 </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderBottom: '1px solid #E2E8F0' }}>
                {headers.map((header) => (
                  <td key={header} style={{ padding: '12px 16px', fontSize: '14px', color: '#334155' }}>
                    {renderCell(header, row[header], row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
       
      </main>
    </div>
    </div>
  );
};

export default Table;