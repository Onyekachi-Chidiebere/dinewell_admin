"use client";
import Table from "@/components/Table";
import { useTitle } from "@/context/TitleContext";
import { useCustomers } from "@/customHooks/useCustomers";
import { useEffect, useState } from "react";
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';
import ModalBreadCrumb from "@/components/ModalBreadCrumb";
import { Avatar, LoadingOverlay } from "@mantine/core";

const Customers = () => {
    const { setTitle } = useTitle();
    const { data, loading, error, fetchCustomers } = useCustomers();
    const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>(null);
    const resultsPerPage = 10;

    useEffect(() => {
        setTitle("Customers");
    }, [setTitle]);

    const analytics = data ? [
        { key: 'all', label: 'All Customers', count: data.statistics.total_customers },
        { key: 'top', label: 'Top 100 Customers', count: Math.min(100, data.statistics.total_customers) },
    ] : [
        { key: 'all', label: 'All Customers', count: 0 },
        { key: 'top', label: 'Top 100 Customers', count: 0 },
    ];

    const headers = ['S/N', 'CUSTOMER NAME', 'EMAIL ADDRESS', 'PHONE NUMBER', 'DATE JOINED', 'POINTS EARNED', 'RESTAURANTS VISITED', 'ACTIONS'];

    const tableTitle = analytics.find((item) => item.key === activeAnalyticsKey)?.label;
    
    // Transform API data to table format
    const allTableData = data ? data.customers.map((customer, index) => ({
        'S/N': String(index + 1).padStart(2, '0'),
        'CUSTOMER NAME': customer.name,
        'EMAIL ADDRESS': customer.email,
        'PHONE NUMBER': customer.phone,
        'DATE JOINED': new Date(customer.date_created).toLocaleDateString(),
        'POINTS EARNED': customer.total_points_earned.toLocaleString(),
        'RESTAURANTS VISITED': customer.total_restaurants_visited.toString(),
        'CUSTOMER ID': customer.id.toString(),
    })) : [];

    const tableData = allTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const restaurantHeaders = ['S/N', 'RESTAURANT NAME', 'POINTS', 'TYPE', 'DATE & TIME', 'ACTIONS'];

    const restaurantTableData = [
        { 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'POINTS': '1,250', 'TYPE': 'Earned', 'DATE & TIME': '12/02/2023 14:30' },
        { 'S/N': '02', 'RESTAURANT NAME': 'KFC', 'POINTS': '850', 'TYPE': 'Redeemed', 'DATE & TIME': '15/03/2023 09:15' },
        { 'S/N': '03', 'RESTAURANT NAME': 'Dominos Pizza', 'POINTS': '1,500', 'TYPE': 'Earned', 'DATE & TIME': '20/03/2023 18:45' },
        { 'S/N': '04', 'RESTAURANT NAME': 'Burger King', 'POINTS': '2,000', 'TYPE': 'Earned', 'DATE & TIME': '25/03/2023 12:30' },
        { 'S/N': '05', 'RESTAURANT NAME': 'Pizza Hut', 'POINTS': '750', 'TYPE': 'Redeemed', 'DATE & TIME': '01/04/2023 16:20' },
        { 'S/N': '06', 'RESTAURANT NAME': 'Tasty Fried Chicken', 'POINTS': '1,800', 'TYPE': 'Earned', 'DATE & TIME': '05/04/2023 19:10' },
        { 'S/N': '07', 'RESTAURANT NAME': 'Chicken Lovers', 'POINTS': '950', 'TYPE': 'Redeemed', 'DATE & TIME': '10/04/2023 11:40' },
        { 'S/N': '08', 'RESTAURANT NAME': 'Pizza Palace', 'POINTS': '1,100', 'TYPE': 'Earned', 'DATE & TIME': '15/04/2023 13:25' },
        { 'S/N': '09', 'RESTAURANT NAME': 'McDonalds', 'POINTS': '2,200', 'TYPE': 'Earned', 'DATE & TIME': '20/04/2023 17:50' },
        { 'S/N': '10', 'RESTAURANT NAME': 'Krispy Krunchy', 'POINTS': '650', 'TYPE': 'Redeemed', 'DATE & TIME': '25/04/2023 10:15' },
        { 'S/N': '11', 'RESTAURANT NAME': 'Chicken Republic', 'POINTS': '1,400', 'TYPE': 'Earned', 'DATE & TIME': '01/05/2023 14:20' },
        { 'S/N': '12', 'RESTAURANT NAME': 'KFC', 'POINTS': '1,750', 'TYPE': 'Earned', 'DATE & TIME': '05/05/2023 16:45' },
        { 'S/N': '13', 'RESTAURANT NAME': 'Dominos Pizza', 'POINTS': '900', 'TYPE': 'Redeemed', 'DATE & TIME': '10/05/2023 12:30' },
        { 'S/N': '14', 'RESTAURANT NAME': 'Burger King', 'POINTS': '1,100', 'TYPE': 'Earned', 'DATE & TIME': '15/05/2023 18:15' },
        { 'S/N': '15', 'RESTAURANT NAME': 'Pizza Hut', 'POINTS': '2,300', 'TYPE': 'Earned', 'DATE & TIME': '20/05/2023 19:30' },
        { 'S/N': '16', 'RESTAURANT NAME': 'Tasty Fried Chicken', 'POINTS': '800', 'TYPE': 'Redeemed', 'DATE & TIME': '25/05/2023 11:20' },
        { 'S/N': '17', 'RESTAURANT NAME': 'Chicken Lovers', 'POINTS': '1,600', 'TYPE': 'Earned', 'DATE & TIME': '01/06/2023 15:40' },
        { 'S/N': '18', 'RESTAURANT NAME': 'Pizza Palace', 'POINTS': '1,900', 'TYPE': 'Earned', 'DATE & TIME': '05/06/2023 17:25' },
        { 'S/N': '19', 'RESTAURANT NAME': 'McDonalds', 'POINTS': '1,100', 'TYPE': 'Redeemed', 'DATE & TIME': '10/06/2023 12:10' },
        { 'S/N': '20', 'RESTAURANT NAME': 'Krispy Krunchy', 'POINTS': '2,400', 'TYPE': 'Earned', 'DATE & TIME': '15/06/2023 19:45' },
    ];
    const restaurantableData = restaurantTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);


    const renderCell = (header: string, value: any, row: Record<string, any>) => {

        if (header === 'ACTIONS') {
            return (
                <span
                    onClick={() => {
                        setSelectedUser(row);
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
                    <ModalCard title="">
                        <DetailRow label="CUSTOMER ID" value={selectedUser?.['CUSTOMER ID'] || 'N/A'} />
                    </ModalCard>
                    <ModalCard title="">
                        <DetailRow label="CUSTOMER PHOTO">
                            <Avatar src={selectedUser?.profile_image} size={80} radius="sm" />
                        </DetailRow>
                    </ModalCard>
                    <ModalCard title="CUSTOMER DETAILS">
                        <DetailRow label="CUSTOMER NAME" value={selectedUser?.['CUSTOMER NAME'] || 'N/A'} />
                        <DetailRow label="POINTS EARNED" value={selectedUser?.['POINTS EARNED'] || '0'} />
                        <DetailRow label="RESTAURANTS VISITED" value={selectedUser?.['RESTAURANTS VISITED'] || '0'} />
                    </ModalCard>
                    <ModalCard title="CONTACT DETAILS">
                        <DetailRow label="EMAIL" value={selectedUser?.['EMAIL ADDRESS'] || 'N/A'} />
                        <DetailRow label="PHONE NUMBER" value={selectedUser?.['PHONE NUMBER'] || 'N/A'} />
                    </ModalCard>
                </div>
            ),
        },
        {
            name: 'Point Transactions', content: <div style={{ padding: '0 16px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <ModalBreadCrumb title="Total visits" subtitle="RESTAURANTS" icon={''} count="1210" />
                    <ModalBreadCrumb title="Total points" subtitle="BALANCE" icon={''} count="10,120,000" />
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <ModalBreadCrumb title="Total points" subtitle="EARNED" icon={''} count="10,120,000" />
                    <ModalBreadCrumb title="Total points" subtitle="REDEEMED" icon={''} count="10,120,000" />
                </div>
                <Table
                    headers={restaurantHeaders}
                    data={restaurantableData}
                    renderCell={renderCell}
                    activeAnalyticsKey={activeAnalyticsKey}
                    onAnalyticsItemClick={setActiveAnalyticsKey}
                    pagination={{
                        small: true,
                        currentPage,
                        totalPages: Math.ceil(restaurantableData.length / resultsPerPage),
                        totalResults: restaurantableData.length,
                        resultsPerPage,
                        onPageChange: setCurrentPage,
                    }}
                />
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
                    title: selectedUser?.['CUSTOMER NAME'],
                    status: selectedUser?.['STATUS'],
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
                        await fetchCustomers(page, resultsPerPage);
                    },
                }}
            />
        </div>
    );
};
export default Customers;