"use client";
import { useEffect, useState } from "react";
import { useTitle } from "@/context/TitleContext";
import Table from "@/components/Table";
const StatusIndicator: React.FC<{ status: 'ACTIVE' | 'PENDING' | 'SUSPENDED' }> = ({ status }) => {
  const statusStyles = {
    ACTIVE: {
      color: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    },
    PENDING: {
      color: '#828DA9',
      backgroundColor: 'rgba(130, 141, 169, 0.1)',
    },
    SUSPENDED: {
      color: '#EF4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
  };

  const style = statusStyles[status] || statusStyles.PENDING;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 8px',
        borderRadius: '12px',
        backgroundColor: style.backgroundColor,
        color: style.color,
        fontFamily: 'var(--font-mulish)',
        fontSize: '12px',
        fontWeight: 700,
        textTransform: 'uppercase',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: style.color,
        }}
      ></span>
      {status}
    </div>
  );
};

const Restaurants = () => {
  const { setTitle, setAction, setActionText } = useTitle();
  const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  useEffect(() => {
    setTitle("Restaurants");
    setActionText("New Restaurant");
    setAction(() => () => alert("New Restaurant clicked!"));
  }, [setTitle, setAction, setActionText]);

  const analytics = [
    { key: 'all', label: 'All Restaurants', count: 3100 },
    { key: 'pending', label: 'Pending Restaurants', count: 12 },
    { key: 'blocked', label: 'Blocked Restaurants', count: 2 },
  ];

  const headers = ['S/N', 'RESTAURANT NAME', 'RESTAURANT ID', 'LOCATION', 'TIER', 'STATUS', 'ACTIONS'];

  const allTableData = [
    { 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '02', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '03', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'PENDING' },
    { 'S/N': '04', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'SUSPENDED' },
    { 'S/N': '05', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '06', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '07', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '08', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'PENDING' },
    { 'S/N': '09', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'SUSPENDED' },
    { 'S/N': '10', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '11', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '12', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '13', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'PENDING' },
    { 'S/N': '14', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'SUSPENDED' },
    { 'S/N': '15', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '16', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '17', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
    { 'S/N': '18', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'PENDING' },
    { 'S/N': '19', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'SUSPENDED' },
    { 'S/N': '20', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },
  ];

  const tableData = allTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  const renderCell = (header: string, value: any) => {
    if (header === 'STATUS') {
      return <StatusIndicator status={value as 'ACTIVE' | 'PENDING' | 'SUSPENDED'} />;
    }
    if (header === 'ACTIONS') {
      return (
        <span style={{ cursor: 'pointer', color: '#828DA9' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
          </svg>
        </span>
      );
    }
    if (header === 'S/N') {
      return <span style={{ fontWeight: 600, color: '#5D47C1' }}>{value}</span>;
    }
    return value;
  };

  return (
    <div>
      <Table
        title="ALL RESTAURANTS"
        analytics={analytics}
        headers={headers}
        data={tableData}
        renderCell={renderCell}
        activeAnalyticsKey={activeAnalyticsKey}
        onAnalyticsItemClick={setActiveAnalyticsKey}
        pagination={{
          currentPage,
          totalPages: Math.ceil(allTableData.length / resultsPerPage),
          totalResults: allTableData.length,
          resultsPerPage,
          onPageChange: setCurrentPage,
        }}
      />
    </div>
  );
};
export default Restaurants;