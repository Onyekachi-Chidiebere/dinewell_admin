import React, { useState } from 'react';
import { Badge } from '@mantine/core';
import Table from './Table'; // Assuming Table is in the same directory or update path

interface User {
    id: string;
    name: string;
    email: string;
    role: 'SUPER ADMIN' | 'ADMIN' | 'SUPPORT' | 'MANAGER' | 'STAFF' | 'INTERN';
    activeStatus: string;
}

interface UsersTabProps {
    users: User[];
}

const RoleBadge: React.FC<{ role: User['role'] }> = ({ role }) => (
    <Badge
        variant="light"
        styles={{
            root: {
                backgroundColor: '#F5F5FF',
                color: '#828DA9',
                fontWeight: 500,
                textTransform: 'uppercase',
                borderRadius: '6px',
                padding: '4px 8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
            },
        }}
    >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#828DA9' }} />
        {role}
    </Badge>
);



const UsersTab: React.FC<UsersTabProps> = ({ users }) => {
    const headers = ['S/N', 'USERNAME', 'EMAIL', 'ROLE', 'ACTIVE STATUS'];
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 10;
    const tableData = users.map((user, index) => ({
        'S/N': index + 1,
        'USERNAME': user.name,
        'EMAIL': user.email,
        'ROLE': user.role,
        'ACTIVE STATUS': user.activeStatus,
        // Pass original user object for renderCell if needed
        original: user 
    }));

    const renderCell = (header: string, value: any, rowData: any) => {
        if (header === 'ROLE') {
            return <RoleBadge role={value} />;
        }
        if (header === 'ACTIVE STATUS') {
            return (
                <Badge
                    variant="light"
                    styles={{
                        root: {
                            backgroundColor: 'transparent',
                            color: '#828DA9',
                            fontWeight: 500,
                            textTransform: 'none',
                            borderRadius: '6px',
                            padding: '4px 8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                        },
                    }}
                >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#828DA9' }} />
                    {value}
                </Badge>
            );
        }
        return value;
    };

    return (
        <div style={{ padding: '16px' }}>
            <Table 
                headers={headers}
                data={tableData}
                renderCell={renderCell} 
                pagination={{
                    currentPage,
                    totalPages: Math.ceil(tableData.length / resultsPerPage),
                    totalResults: tableData.length,
                    resultsPerPage,
                    onPageChange: setCurrentPage,
                    small: true
                }}
                />
        </div>
    );
};

export default UsersTab;
