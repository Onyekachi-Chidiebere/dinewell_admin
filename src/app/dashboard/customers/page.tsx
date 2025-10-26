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
    const { data, loading, error, fetchCustomers, getCustomerDetails, detailsLoading, detailsError } = useCustomers();
    const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>(null);
    const [selectedUserDetails, setSelectedUserDetails] = useState<any>(null);
    const resultsPerPage = 10;

    useEffect(() => {
        setTitle("Customers");
    }, [setTitle]);

    const handleUserSelect = async (row: Record<string, any>) => {
        setSelectedUser(row);
        setIsModalOpen(true);
        
        // Fetch detailed customer information
        const customerId = parseInt(row['CUSTOMER ID']);
        if (customerId) {
            const details = await getCustomerDetails(customerId);
            setSelectedUserDetails(details);
        }
    };

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

    const restaurantHeaders = ['S/N', 'RESTAURANT', 'POINTS', 'TYPE', 'DATE & TIME', ];

    const renderCell = (header: string, value: any, row: Record<string, any>) => {

        if (header === 'ACTIONS') {
            return (
                <span
                    onClick={() => handleUserSelect(row)}
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
                    {detailsLoading ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            <LoadingOverlay visible={true} />
                        </div>
                    ) : detailsError ? (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#EF4444' }}>
                            Error: {detailsError}
                        </div>
                    ) : selectedUserDetails ? (
                        <>
                            <ModalCard title="">
                                <DetailRow label="CUSTOMER ID" value={selectedUserDetails.customer.id.toString()} />
                            </ModalCard>
                            <ModalCard title="">
                                <DetailRow label="CUSTOMER PHOTO">
                                    <Avatar src={selectedUserDetails.customer.profile_image} size={80} radius="sm" />
                                </DetailRow>
                            </ModalCard>
                            <ModalCard title="CUSTOMER DETAILS">
                                <DetailRow label="CUSTOMER NAME" value={selectedUserDetails.customer.name} />
                                <DetailRow label="POINTS EARNED" value={selectedUserDetails.statistics.points_earned.toLocaleString()} />
                                <DetailRow label="RESTAURANTS VISITED" value={selectedUserDetails.statistics.total_restaurant_visits.toString()} />
                            </ModalCard>
                            <ModalCard title="CONTACT DETAILS">
                                <DetailRow label="EMAIL" value={selectedUserDetails.customer.email} />
                                <DetailRow label="PHONE NUMBER" value={selectedUserDetails.customer.phone} />
                            </ModalCard>
                        </>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            No customer details available
                        </div>
                    )}
                </div>
            ),
        },
        {
            name: 'Point Transactions', content: <div style={{ padding: '0 16px' }}>
                {detailsLoading ? (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <LoadingOverlay visible={true} />
                    </div>
                ) : detailsError ? (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#EF4444' }}>
                        Error: {detailsError}
                    </div>
                ) : selectedUserDetails ? (
                    <>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                            <ModalBreadCrumb title="Total visits" subtitle="RESTAURANTS" icon={''} count={selectedUserDetails.statistics.total_restaurant_visits.toString()} />
                            <ModalBreadCrumb title="Total points" subtitle="BALANCE" icon={''} count={(selectedUserDetails.statistics.points_earned - selectedUserDetails.statistics.points_redeemed).toLocaleString()} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                            <ModalBreadCrumb title="Total points" subtitle="EARNED" icon={''} count={selectedUserDetails.statistics.points_earned.toLocaleString()} />
                            <ModalBreadCrumb title="Total points" subtitle="REDEEMED" icon={''} count={selectedUserDetails.statistics.points_redeemed.toLocaleString()} />
                        </div>
                        <Table
                            headers={restaurantHeaders}
                            data={selectedUserDetails.point_transactions.map((transaction: any, index: number) => ({
                                'S/N': String(index + 1).padStart(2, '0'),
                                'RESTAURANT': transaction.restaurant_name,
                                'POINTS': transaction.points.toLocaleString(),
                                'TYPE': transaction.point_type,
                                'DATE & TIME': new Date(transaction.date_used).toLocaleString(),
                            }))}
                            renderCell={renderCell}
                            activeAnalyticsKey={activeAnalyticsKey}
                            onAnalyticsItemClick={setActiveAnalyticsKey}
                            pagination={{
                                small: true,
                                currentPage: selectedUserDetails.pagination.currentPage,
                                totalPages: selectedUserDetails.pagination.totalPages,
                                totalResults: selectedUserDetails.pagination.totalItems,
                                resultsPerPage: selectedUserDetails.pagination.itemsPerPage,
                                onPageChange: async (page: number) => {
                                    const customerId = parseInt(selectedUser?.['CUSTOMER ID'] || '0');
                                    if (customerId) {
                                        const details = await getCustomerDetails(customerId, page, resultsPerPage);
                                        setSelectedUserDetails(details);
                                    }
                                },
                            }}
                        />
                    </>
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        No transaction data available
                    </div>
                )}
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