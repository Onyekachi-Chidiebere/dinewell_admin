"use client";
import Table from "@/components/Table";
import { useState } from "react";
import Modal from '@/components/Modal';
import ModalCard, { DetailRow } from "@/components/ModalCard";

const Permissions = () => {
    const [currentPage, setCurrentPage] = useState(1);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [selectedRole, setSelectedRole] = useState<Record<string, any> | null>({ 'S/N': '01', 'RESTAURANT NAME': 'Chicken Republic', 'RESTAURANT ID': '1122334455', 'LOCATION': 'Toronto, Canada', 'TIER': 'Basic', 'STATUS': 'ACTIVE' },);
        const resultsPerPage = 10;
    const headers = ['TITLE', 'ASSIGNED USER', 'PERMISSIONS', 'ACTIONS'];
    const userHeaders = ['S/N', 'NAME', 'PHONE NUMBER', 'DATE ASSIGNED', 'ACTIONS'];
    const allTableData = [
        { 'TITLE': 'Super Admin', 'ASSIGNED USER': '02', 'PERMISSIONS': ['DASHBOARD', 'RESTAURANTS', 'USERS', 'SETTINGS'], },
        { 'TITLE': 'Admin', 'ASSIGNED USER': '03', 'PERMISSIONS': ['DASHBOARD', 'RESTAURANTS', ],  },
        { 'TITLE': 'Support ', 'ASSIGNED USER': '05', 'PERMISSIONS': ['DASHBOARD',],  },
       
    ];

    const tableData = allTableData.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const renderCell = (header: string, value: any, row: Record<string, any>) => {
 
        if (header === 'ACTIONS') {
            return (
                <button
                    onClick={() => {
                        setSelectedRole(row);
                        setIsModalOpen(true);
                    }}
                    style={{ cursor: 'pointer', color: '#050505',borderRadius:20, fontSize:'10px', backgroundColor: '#EAEEF2', border:'0.6px solid #D2D3F3'}}
                >
                    View
                </button>
            );
        }
        if (header === 'PERMISSIONS') {
            return <span style={{display:'flex', gap:'6px'}}>
                {value.map((item:string)=><span style={{border:'0.4px solid #D2D3F3',borderRadius:'20px',padding:'1px 8px', backgroundColor:'#F5F5FF', display:'flex', alignItems:'center', gap:'6px'}}>
                <p style={{width:'6px',height:'6px',borderRadius:'50%',background:'#828DA9'}}/>
                <span style={{ fontWeight: 400, fontSize:'12px', color: '#49526A' }}>{item}</span>
                </span>)}
            </span>;
        }
        return value;
    };
    const renderUserCell = (header: string, value: any, row: Record<string, any>) => {
 
        if (header === 'ACTIONS') {
            return (
                <button
                    onClick={() => {
                        
                    }}
                    style={{ cursor: 'pointer', color: '#FF0707',borderRadius:20, fontSize:'10px', backgroundColor: '#EAEEF2', border:'0.6px solid rgba(255, 7, 7, 0.51)'}}
                >
                    Remove
                </button>
            );
        }
        if (header === 'PERMISSIONS') {
            return <span style={{display:'flex', gap:'6px'}}>
                {value.map((item:string)=><span style={{border:'0.4px solid #D2D3F3',borderRadius:'20px',padding:'1px 8px', backgroundColor:'#F5F5FF', display:'flex', alignItems:'center', gap:'6px'}}>
                <p style={{width:'6px',height:'6px',borderRadius:'50%',background:'#828DA9'}}/>
                <span style={{ fontWeight: 400, fontSize:'12px', color: '#49526A' }}>{item}</span>
                </span>)}
            </span>;
        }
        return value;
    };

    const mockUsers = [
        { 'S/N': '1', 'NAME': 'Samuel O', 'PHONE NUMBER': '08069523639', 'ROLE': 'SUPER ADMIN', 'DATE ASSIGNED': '12/05/2025 12:02PM' },
        { 'S/N': '2', 'NAME': 'Amaefula C', 'PHONE NUMBER': '08069523639', 'ROLE': 'ADMIN', 'DATE ASSIGNED': '12/05/2025 12:02PM' },
        { 'S/N': '3', 'NAME': 'Chidi Samuel', 'PHONE NUMBER': '08069523639', 'ROLE': 'SUPPORT', 'DATE ASSIGNED': '12/05/2025 12:02PM' },
       ];
    const mockUserTableData = mockUsers.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

    const tabs = [
        {
            name: 'Details',
            content: (
                <div style={{ padding: '0 16px' }}>
                    <ModalCard title="">
                        <DetailRow label="ROLE TITLE" value={selectedRole?.['TITLE'] || 'Admin'} />
                    </ModalCard>
                    <ModalCard title="ROLE DETAILS">
                        <DetailRow label="CREATED BY" value={selectedRole?.['CREATED BY'] || 'Chidi Samuel'} />
                        <DetailRow label="DESIGNATION" value={selectedRole?.['DESIGNATION'] || 'Owner'} />
                        <DetailRow label="DATE & TIME" value={selectedRole?.['LOCATION'] || 'Today, 2:30PM'} />
                    </ModalCard>
                    <ModalCard title="">
                        <DetailRow label="ASSIGNED USERS" value={selectedRole?.['USERS'] || '08'} />
                    </ModalCard>
                </div>
            ),
        },
        {
            name: 'Assigned Users',
            content: (
                <div style={{ padding: '0 16px' }}>
                         <Table
                    headers={userHeaders}
                    data={mockUserTableData}
                    renderCell={renderUserCell}
                    pagination={{
                        small: true,
                        currentPage,
                        totalPages: Math.ceil(mockUsers.length / resultsPerPage),
                        totalResults: mockUsers.length,
                        resultsPerPage,
                        onPageChange: setCurrentPage,
                    }}
                />
                </div>
            ),
        },
    
    ];

    return <div>
          <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                data={{
                    title: selectedRole?.['TITLE'],
                    status: selectedRole?.['STATUS'],
                    tabs
                }}
            />
        <div style={{ width: '70%', margin: 'auto', border: '1px solid #EAEEF2', borderRadius: '20px' }}>
            <div style={{ background: "url('/maze-bg.svg') no-repeat left 32px center", height: '100px' }} />
            <div style={{ padding: '16px' }}>
            <Table
                title={''}
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
            </div>
        </div>
    </div>;
};
export default Permissions;