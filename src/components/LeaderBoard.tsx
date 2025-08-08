'use client';

import React from 'react';

interface LeaderBoardProps {
  title: string;
  children: React.ReactNode;
  colors?: {
    background: string;
    border: string;
  };
}

const LeaderBoard: React.FC<LeaderBoardProps> = ({
  title,
  children,
  colors = { background: '#EFF2FF', border: '#D7DDFF' },
}) => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        // height: '400px',
        background: colors.background,
        border: `0.6px solid ${colors.border}`,
        borderRadius: '16px',
        padding: '8px',
        gap: '10px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '4px 8px',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-maven-pro)',
            fontWeight: 700,
            fontSize: '16px',
            color: '#828DA9',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              background: '#fff',
              border: '1px solid #D2D3F3',
              borderRadius: '24px',
              padding: '8px 16px',
              color: '#828DA9',
              fontFamily: 'var(--font-red-hat-display)',
              fontSize: '12px',
              cursor: 'pointer',
            }}
          >
            Refresh List
          </button>
          <button
            style={{
              background: '#fff',
              border: '1px solid #D2D3F3',
              borderRadius: '24px',
              padding: '8px 16px',
              color: '#828DA9',
              fontFamily: 'var(--font-red-hat-display)',
              fontSize: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            May 2025
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="#828DA9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          flexGrow: 1,
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '16px',
          overflowY: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LeaderBoard;
