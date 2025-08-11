"use client";
import { useEffect, useState } from "react";
import { useTitle } from "@/context/TitleContext";
import Table from "@/components/Table";
import { Avatar } from '@mantine/core';
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';
import UsersTab from '@/components/UsersTab';


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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Record<string, any> | null>({ 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },);
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

    const renderCell = (header: string, value: any, row: Record<string, any>) => {
        if (header === 'STATUS') {
            return <StatusIndicator status={value as 'ACTIVE' | 'PENDING' | 'SUSPENDED'} />;
        }
        if (header === 'ACTIONS') {
            return (
                <span
                    onClick={() => {
                        setSelectedRestaurant(row);
                        setIsModalOpen(true);
                    }}
                    style={{ cursor: 'pointer', color: '#828DA9' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                    </svg>
                </span>
            );
        }
        if (header === 'S/N') {
            return <span style={{ fontWeight: 600, color: '#5D47C1' }}>{value}</span>;
        }
        return value;
    };

    const mockUsers = [
    { id: '1', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'SUPER ADMIN', activeStatus: '12/05/2025 12:02PM' },
    { id: '2', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'ADMIN', activeStatus: '12/05/2025 12:02PM' },
    { id: '3', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'SUPPORT', activeStatus: '12/05/2025 12:02PM' },
    { id: '4', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'MANAGER', activeStatus: '12/05/2025 12:02PM' },
    { id: '5', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
    { id: '6', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
    { id: '7', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'INTERN', activeStatus: '12/05/2025 12:02PM' },
    { id: '8', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
    { id: '9', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'INTERN', activeStatus: '12/05/2025 12:02PM' },
    { id: '10', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
    { id: '11', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
    { id: '12', name: 'Call me senSÉ', email: 'ideastoimpact.sense@g...', role: 'STAFF', activeStatus: '12/05/2025 12:02PM' },
  ];

  const tabs = [
    {
      name: 'Details',
      content: (
        <div style={{ padding: '0 16px' }}>
          <ModalCard title="">
            <DetailRow label="RESTAURANT ID" value={selectedRestaurant?.['RESTAURANT ID'] || '121212121'} />
          </ModalCard>
          <ModalCard title="">
            <DetailRow label="RESTAURANT PHOTO">
              <Avatar src={selectedRestaurant?.logo} size={80} radius="sm" />
            </DetailRow>
          </ModalCard>
          <ModalCard title="RESTAURANT DETAILS">
            <DetailRow label="RESTAURANT NAME" value={selectedRestaurant?.['RESTAURANT NAME'] || ''} />
            <DetailRow label="ADDRESS" value={selectedRestaurant?.['ADDRESS'] || '123 Main St, Toronto, Canada'} />
            <DetailRow label="LOCATION" value={selectedRestaurant?.['LOCATION'] || 'Toronto, Canada'} />
          </ModalCard>
          <ModalCard title="CONTACT DETAILS">
            <DetailRow label="EMAIL" value={selectedRestaurant?.['EMAIL'] || 'sam@gmail.com'} />
            <DetailRow label="PHONE NUMBER" value={selectedRestaurant?.['PHONE NUMBER'] || '08012345678'} />
            <DetailRow label="WEBSITE" value={selectedRestaurant?.['WEBSITE'] || 'www.chickenrepublic.com'} />
          </ModalCard>
        </div>
      ),
    },
    // { name: 'Loyalty Program', content: <p style={{padding: '16px'}}>Loyalty Program</p> },
    // { name: 'Points Transactions', content: <p style={{padding: '16px'}}>Points Transactions</p> },
    { name: 'Users', content: <UsersTab users={mockUsers} /> },
    { name: 'Analytics', content: <p style={{padding: '16px'}}>Analytics</p> },
  ];

    return (
        <div style={{padding:'0 32px'}}>
   
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            data={{title: selectedRestaurant?.['RESTAURANT NAME'], 
                status: selectedRestaurant?.['STATUS'], 
                tabs}}
          />
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