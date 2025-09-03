"use client";


import { useEffect, useState } from "react";
import { useTitle } from "@/context/TitleContext";
import Table from "@/components/Table";
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';

const StatusIndicator: React.FC<{ status: 'OPEN' | 'CLOSED' }> = ({ status }) => {
    const statusStyles = {
        OPEN: {
            color: '#10B981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
        },
        CLOSED: {
            color: '#828DA9',
            backgroundColor: 'rgba(130, 141, 169, 0.1)',
        },
        
    };

    const style = statusStyles[status] || statusStyles.OPEN;

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

const Support = () => {
    const { setTitle, } = useTitle();
    const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReport, setSelectedReport] = useState<Record<string, any> | null>({ 'S/N': '01', 'TICKET ID': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },);
    const resultsPerPage = 10;

    useEffect(() => {
        setTitle("Support");
    }, [setTitle]);

    const analytics = [
        { key: 'all', label: 'All Tickets', count: 3100 },
        { key: 'open', label: 'Open Tickets', count: 12 },
        { key: 'closed', label: 'Closed Tickets', count: 2 },
    ];

    const tableTitle = analytics.find((item) => item.key === activeAnalyticsKey)?.label ;
    const headers = ['S/N', 'TICKET ID', 'SUBJECT', 'DATE CREATED', 'FROM', 'STATUS', 'ACTIONS'];

    const allTableData = [
        { 'S/N': '01', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '02', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '03', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '04', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '05', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '06', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '07', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '08', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '09', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '10', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '11', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '12', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '13', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '14', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '15', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '16', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '17', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '18', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
        { 'S/N': '19', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'CLOSED' },
        { 'S/N': '20', 'TICKET ID': '839842', 'SUBJECT': 'Points did not reflect', 'DATE CREATED': '11/11/2025 12:32PM', 'FROM': 'Chidi Samuel', 'STATUS': 'OPEN' },
    ];

    const tableData = allTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const renderCell = (header: string, value: any, row: Record<string, any>) => {
        if (header === 'STATUS') {
            return <StatusIndicator status={value as 'OPEN' | 'CLOSED' } />;
        }
        if (header === 'ACTIONS') {
            return (
                <span
                    onClick={() => {
                        setSelectedReport(row);
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


    const tabs = [
        {
            name: 'Details',
            content: (
                <div style={{ padding: '0 16px' }}>
                    <ModalCard title="REPORT DETAILS">
                        <DetailRow label="CUSTOMER NAME" value={selectedReport?.['FROM'] } />
                        <DetailRow label="SUBJECT" value={selectedReport?.['SUBJECT'] } />
                    </ModalCard>
                   
                </div>
            ),
        },
       
    ];

    return (
        <div style={{ padding: '0 32px' }}>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={{
                    title: selectedReport?.['TICKET ID'],
                    status: selectedReport?.['STATUS'],
                    tabs
                }}
            />
           
            <Table
                title={tableTitle}
                analytics={analytics}
                headers={headers}
                data={tableData}
                renderCell={renderCell}
                activeAnalyticsKey={activeAnalyticsKey}
                onAnalyticsItemClick={setActiveAnalyticsKey}
                pagination={{
                    small: false,
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
export default Support;