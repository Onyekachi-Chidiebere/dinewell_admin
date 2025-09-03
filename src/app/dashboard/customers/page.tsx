"use client";
import Table from "@/components/Table";
import { useTitle } from "@/context/TitleContext";
import { useEffect, useState } from "react";
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';
import ModalBreadCrumb from "@/components/ModalBreadCrumb";
import { Avatar } from "@mantine/core";
import UsersTab from "@/components/UsersTab";
const Customers = () => {
    const { setTitle, setAction, setActionText } = useTitle();
    const [activeAnalyticsKey, setActiveAnalyticsKey] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>({ 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', },);
    const resultsPerPage = 10;

    useEffect(() => {
        setTitle("Customers");
    }, [setTitle]);

    const analytics = [
        { key: 'all', label: 'All Customers', count: 2100 },
        { key: 'top', label: 'Top 100 Customers ', count: 100 },
    ];

    const headers = ['S/N', 'CUSTOMER NAME', 'EMAIL ADDRESS', 'PHONE NUMBER', 'DATE JOINED', 'POINTS EARNED', 'RESTAURANTS VISITED', 'ACTIONS'];

    const tableTitle = analytics.find((item) => item.key === activeAnalyticsKey)?.label ;
    const allTableData = [
        { 'S/N': '01', 'CUSTOMER NAME': 'Adetunji Olaoluwa', 'EMAIL ADDRESS': 'adetunji@example.com', 'PHONE NUMBER': '+234 812 345 6789', 'DATE JOINED': '12/02/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '02', 'CUSTOMER NAME': 'Adeleke Oluwaseun', 'EMAIL ADDRESS': 'adeleke@example.com', 'PHONE NUMBER': '+234 813 456 7890', 'DATE JOINED': '15/03/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '03', 'CUSTOMER NAME': 'Olumide Johnson', 'EMAIL ADDRESS': 'olumide@example.com', 'PHONE NUMBER': '+234 814 567 8901', 'DATE JOINED': '20/03/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '04', 'CUSTOMER NAME': 'Chidinma Eze', 'EMAIL ADDRESS': 'chidinma@example.com', 'PHONE NUMBER': '+234 815 678 9012', 'DATE JOINED': '25/03/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '05', 'CUSTOMER NAME': 'Emeka Okonkwo', 'EMAIL ADDRESS': 'emeka@example.com', 'PHONE NUMBER': '+234 816 789 0123', 'DATE JOINED': '01/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '06', 'CUSTOMER NAME': 'Amina Mohammed', 'EMAIL ADDRESS': 'amina@example.com', 'PHONE NUMBER': '+234 817 890 1234', 'DATE JOINED': '05/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '07', 'CUSTOMER NAME': 'Oluwaseyi Adebayo', 'EMAIL ADDRESS': 'oluwaseyi@example.com', 'PHONE NUMBER': '+234 818 901 2345', 'DATE JOINED': '10/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '08', 'CUSTOMER NAME': 'Ngozi Eze', 'EMAIL ADDRESS': 'ngozi@example.com', 'PHONE NUMBER': '+234 819 012 3456', 'DATE JOINED': '15/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '09', 'CUSTOMER NAME': 'Ibrahim Musa', 'EMAIL ADDRESS': 'ibrahim@example.com', 'PHONE NUMBER': '+234 810 123 4567', 'DATE JOINED': '20/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '10', 'CUSTOMER NAME': 'Aisha Bello', 'EMAIL ADDRESS': 'aisha@example.com', 'PHONE NUMBER': '+234 811 234 5678', 'DATE JOINED': '25/04/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '11', 'CUSTOMER NAME': 'Yusuf Ahmed', 'EMAIL ADDRESS': 'yusuf@example.com', 'PHONE NUMBER': '+234 812 345 6789', 'DATE JOINED': '01/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '12', 'CUSTOMER NAME': 'Chioma Okafor', 'EMAIL ADDRESS': 'chioma@example.com', 'PHONE NUMBER': '+234 813 456 7890', 'DATE JOINED': '05/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '13', 'CUSTOMER NAME': 'Obinna Nwosu', 'EMAIL ADDRESS': 'obinna@example.com', 'PHONE NUMBER': '+234 814 567 8901', 'DATE JOINED': '10/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '14', 'CUSTOMER NAME': 'Amina Yusuf', 'EMAIL ADDRESS': 'aminay@example.com', 'PHONE NUMBER': '+234 815 678 9012', 'DATE JOINED': '15/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '15', 'CUSTOMER NAME': 'Chukwudi Okoro', 'EMAIL ADDRESS': 'chukwudi@example.com', 'PHONE NUMBER': '+234 816 789 0123', 'DATE JOINED': '20/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '16', 'CUSTOMER NAME': 'Folake Adeleke', 'EMAIL ADDRESS': 'folake@example.com', 'PHONE NUMBER': '+234 817 890 1234', 'DATE JOINED': '25/05/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '17', 'CUSTOMER NAME': 'Mohammed Sani', 'EMAIL ADDRESS': 'mohammed@example.com', 'PHONE NUMBER': '+234 818 901 2345', 'DATE JOINED': '01/06/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '18', 'CUSTOMER NAME': 'Grace Okafor', 'EMAIL ADDRESS': 'grace@example.com', 'PHONE NUMBER': '+234 819 012 3456', 'DATE JOINED': '05/06/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'ACTIVE' },
        { 'S/N': '19', 'CUSTOMER NAME': 'Tunde Ojo', 'EMAIL ADDRESS': 'tunde@example.com', 'PHONE NUMBER': '+234 810 123 4567', 'DATE JOINED': '10/06/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
        { 'S/N': '20', 'CUSTOMER NAME': 'Blessing Okonkwo', 'EMAIL ADDRESS': 'blessing@example.com', 'PHONE NUMBER': '+234 811 234 5678', 'DATE JOINED': '15/06/2023', 'POINTS EARNED': '1000', 'RESTAURANTS VISITED': '10', 'STATUS': 'INACTIVE' },
    ];

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
                        <DetailRow label="CUSTOMER ID" value={selectedUser?.['CUSTOMER ID'] || '121212121'} />
                    </ModalCard>
                    <ModalCard title="">
                        <DetailRow label="CUSTOMER  PHOTO">
                            <Avatar src={selectedUser?.logo} size={80} radius="sm" />
                        </DetailRow>
                    </ModalCard>
                    <ModalCard title="CUSTOMER DETAILS">
                        <DetailRow label="CUSTOMER NAME" value={selectedUser?.['CUSTOMER NAME'] || ''} />
                        <DetailRow label="ADDRESS" value={selectedUser?.['ADDRESS'] || '123 Main St, Toronto, Canada'} />
                        <DetailRow label="LOCATION" value={selectedUser?.['LOCATION'] || 'Toronto, Canada'} />
                    </ModalCard>
                    <ModalCard title="CONTACT DETAILS">
                        <DetailRow label="EMAIL" value={selectedUser?.['EMAIL'] || 'sam@gmail.com'} />
                        <DetailRow label="PHONE NUMBER" value={selectedUser?.['PHONE NUMBER'] || '08012345678'} />
                    </ModalCard>
                </div>
            ),
        },
        {
            name: 'Point Transactions', content: <div style={{ padding: '0 16px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <ModalBreadCrumb title="Total visiting" subtitle="CUSTOMERS" icon={''} count="1210" />
                    <ModalBreadCrumb title="Total points" subtitle="GENERATED" icon={''} count="10,120,000" />
                </div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <ModalBreadCrumb title="Total points" subtitle="GENERATED" icon={''} count="10,120,000" />
                    <ModalBreadCrumb title="Total points" subtitle="GENERATED" icon={''} count="10,120,000" />
                </div>
                <Table
                    // title="ALL CUSTOMERS"
                    // analytics={analytics}
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
export default Customers;