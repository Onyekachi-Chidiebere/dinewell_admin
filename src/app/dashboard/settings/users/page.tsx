"use client";
import { useState } from "react";
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from '@/components/ModalCard';
import Table from "@/components/Table";
import { Avatar } from "@mantine/core";

const Users = () => {
    const [selectedUser, setSelectedUser] = useState<Record<string, any> | null>({ 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', },);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const resultsPerPage = 10;

    const headers = ['S/N', 'CUSTOMER NAME', 'EMAIL ADDRESS', 'PHONE NUMBER', 'DATE JOINED', 'POINTS EARNED', 'RESTAURANTS VISITED', 'ACTIONS'];

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
       
    ];

    return <div style={{ padding: '0 32px' }}>
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
            title={'ALL USERS'}
            headers={headers}
            data={tableData}
            renderCell={renderCell}
            pagination={{
                small: false,
                currentPage,
                totalPages: Math.ceil(allTableData.length / resultsPerPage),
                totalResults: allTableData.length,
                resultsPerPage,
                onPageChange: setCurrentPage,
            }}
        />
    </div>;
};
export default Users;