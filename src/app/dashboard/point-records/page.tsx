"use client";


import { useEffect, useState } from "react";
import { useTitle } from "@/context/TitleContext";
import { usePoints } from "@/customHooks/usePoints";
import Table from "@/components/Table";
import { Avatar, LoadingOverlay } from '@mantine/core';
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';
import UsersTab from '@/components/UsersTab';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'SUPER ADMIN' | 'ADMIN' | 'SUPPORT' | 'MANAGER' | 'STAFF' | 'INTERN';
    activeStatus: string;
}

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

const PointRecords = () => {
    const { setTitle } = useTitle();
    const { data, loading, error, fetchPoints } = usePoints();
    const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState<Record<string, any> | null>(null);
    const resultsPerPage = 10;

    useEffect(() => {
        setTitle("Point Records");
    }, [setTitle]);

    const analytics = data ? [
        { key: 'all', label: 'All Points', count: data.statistics.total_points },
        { key: 'issued', label: 'Points Issued', count: data.statistics.total_used },
        { key: 'redeemed', label: 'Points Redeemed', count: data.statistics.total_redeemed },
    ] : [
        { key: 'all', label: 'All Points', count: 0 },
        { key: 'issued', label: 'Points Issued', count: 0 },
        { key: 'redeemed', label: 'Points Redeemed', count: 0 },
    ];

    const tableTitle = analytics.find((item) => item.key === activeAnalyticsKey)?.label ;
    const headers = ['S/N', 'RESTAURANT NAME', 'CUSTOMER NAME', 'NO. OF POINTS', 'TYPE', 'DATE CREATED', 'ACTIONS'];

    // Transform API data to table format
    const allTableData = data ? data.points.map((point, index) => ({
        'S/N': String(index + 1).padStart(2, '0'),
        'RESTAURANT NAME': point.restaurant_name,
        'CUSTOMER NAME': point.customer_name,
        'NO. OF POINTS': point.points.toString(),
        'TYPE': point.type === 'issue' ? 'Issued' : 'Redeemed',
        'DATE CREATED': new Date(point.date_used).toLocaleDateString(),
        'POINT ID': point.id.toString(),
    })) : [];

    const tableData = allTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const StatsRow = ({ label, value }: { label: string; value: string }) =>{
        return (
            <div style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '12px',
                gap: '4px',
                width: '648px',
                height: '62px',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
            }}>
                <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '38px',
                    background: '#F4F4F4',
                    borderRadius: '19px',
                    border: '1px solid #EBEEFF',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 16px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                }}>
                
                    <svg style={{ position: 'absolute', top: 0, left:0,  }} width="343" height="38" viewBox="0 0 343 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2258_77689)">
                            <circle cx="52.3076" cy="-85.75" r="385.446" stroke="#DDDEF1" stroke-width="0.8575" />
                            <circle cx="91.7525" cy="-14.5781" r="385.446" stroke="#DDDEF1" stroke-width="0.8575" />
                            <circle cx="-5.14502" cy="-112.332" r="171.071" stroke="#DDDEF1" stroke-width="0.8575" />
                            <circle cx="-5.14502" cy="-142.346" r="256.821" stroke="#DDDEF1" stroke-width="0.8575" />
                            <circle cx="-5.14502" cy="-168.928" r="342.571" stroke="#DDDEF1" stroke-width="0.8575" />
                            <circle cx="31.7275" cy="-112.332" r="342.571" stroke="#DDDEF1" stroke-width="0.8575" />
                            <line x1="-35.8332" y1="-36.1975" x2="381.36" y2="380.995" stroke="#DDDEF1" stroke-width="0.5145" />
                            <line x1="-45.0377" y1="-30.2487" x2="444.782" y2="298.653" stroke="#DDDEF1" stroke-width="0.5145" />
                            <line x1="-45.0653" y1="-18.2876" x2="502.46" y2="201.522" stroke="#DDDEF1" stroke-width="0.5145" />
                            <line x1="-51.1081" y1="-10.0156" x2="526.707" y2="109.27" stroke="#DDDEF1" stroke-width="0.5145" />
                            <line x1="-25.5655" y1="-40.078" x2="292.273" y2="456.992" stroke="#DDDEF1" stroke-width="0.5145" />
                            <line x1="-11.9026" y1="-38.2215" x2="169.053" y2="523.343" stroke="#DDDEF1" stroke-width="0.5145" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2258_77689">
                                <rect width="343" height="428.75" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span style={{
                        fontSize: '10px',
                        lineHeight: '20px',
                        color: '#828DA9',
                        marginRight: '8px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        textTransform: 'uppercase',
                        fontFamily: 'var(--font-red-hat-display)',
                        zIndex: 1
                    }}>{label}</span>
                    <div style={{
                        marginLeft: 'auto',
                        fontFamily: 'var(--font-red-hat-display)',
                        fontSize: '20px',
                        lineHeight: '20px',
                        color: '#191F2D',
                        fontWeight: 900,
                        padding: '2px 10px',
                        background: '#F3F4F6',
                        borderRadius: '16px',
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        zIndex: 1
                    }}>{value}</div>
                </div>
                </div>
          
        );
    }

    const renderCell = (header: string, value: any, row: Record<string, any>) => {
        if (header === 'STATUS') {
            return <StatusIndicator status={value as 'ACTIVE' | 'PENDING' | 'SUSPENDED'} />;
        }
        if (header === 'ACTIONS') {
            return (
                <span
                    onClick={() => {
                        setSelectedRecord(row);
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

    const mockUsers: User[] = [
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
                        <DetailRow label="POINT ID" value={selectedRecord?.['POINT ID'] || 'N/A'} />
                    </ModalCard>
                    <ModalCard title="">
                        <DetailRow label="RESTAURANT" value={selectedRecord?.['RESTAURANT NAME'] || 'N/A'} />
                    </ModalCard>
                    <ModalCard title="POINT DETAILS">
                        <DetailRow label="CUSTOMER NAME" value={selectedRecord?.['CUSTOMER NAME'] || 'N/A'} />
                        <DetailRow label="NO. OF POINTS" value={selectedRecord?.['NO. OF POINTS'] || '0'} />
                        <DetailRow label="TYPE" value={selectedRecord?.['TYPE'] || 'N/A'} />
                    </ModalCard>
                    <ModalCard title="DATE INFO">
                        <DetailRow label="DATE CREATED" value={selectedRecord?.['DATE CREATED'] || 'N/A'} />
                    </ModalCard>
                </div>
            ),
        },
        { name: 'Dishes', content: <div style={{ padding: '0 16px' }}><UsersTab users={mockUsers} /> </div> },
        {
            name: 'Stats', content: <div style={{ padding: '0 16px' }}>
                <StatsRow label="Base points per dish" value="48" />
                <StatsRow label="points issued" value="220045" />
                <StatsRow label="dish rank" value="2" />
                <StatsRow label="dish rank WORLDWIDE" value="89" />
            </div>
        },
    ];

    if (loading && !data) {
        return (
            <div style={{ padding: '0 32px', position: 'relative', minHeight: '400px' }}>
                <LoadingOverlay visible={true} />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '0 32px' }}>
                <div style={{ 
                    textAlign: 'center', 
                    padding: '40px', 
                    color: '#EF4444',
                    fontSize: '16px'
                }}>
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div style={{ padding: '0 32px' }}>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={{
                    title: selectedRecord?.['RESTAURANT NAME'] || 'Point Record',
                    status: selectedRecord?.['TYPE'] || 'ACTIVE',
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
                    currentPage: data?.pagination.currentPage || currentPage,
                    totalPages: data?.pagination.totalPages || 1,
                    totalResults: data?.pagination.totalItems || 0,
                    resultsPerPage: data?.pagination.itemsPerPage || resultsPerPage,
                    onPageChange: async (page: number) => {
                        setCurrentPage(page);
                        await fetchPoints(page, resultsPerPage);
                    },
                }}
            />

        </div>
    );
};
export default PointRecords;