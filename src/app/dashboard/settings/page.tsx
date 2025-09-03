import ModalCard, { DetailRow } from "@/components/ModalCard";
import { Avatar } from "@mantine/core";

const Profile = () => {
    const user = {
        'USER ID': '121212121',
        'USER NAME': 'John Doe',
        'ADDRESS': '123 Main St, Toronto, Canada',
        'LOCATION': 'Toronto, Canada',
        'EMAIL': 'john.doe@example.com',
        'PHONE NUMBER': '08012345678',
        'DESIGNATION': 'Super Admin',
        'STATUS': 'Active',
        'logo': ''
    };
    return <div>
        <div style={{ width: '70%', margin: 'auto', border: '1px solid #EAEEF2', borderRadius: '20px' }}>
            <div style={{ background: "url('/maze-bg.svg') no-repeat left 32px center", height: '100px' }} />
            <div style={{ padding: '16px' }}>
                <ModalCard title="">
                    <DetailRow label="USER ID" value={user?.['USER ID'] || '121212121'} />
                </ModalCard>
                <ModalCard title="">
                    <DetailRow label="USER PHOTO">
                        <Avatar src={user?.logo} size={80} radius="sm" />
                    </DetailRow>
                </ModalCard>
                <ModalCard title="USER DETAILS">
                    <DetailRow label="USER NAME" value={user?.['USER NAME'] || ''} />
                    <DetailRow label="ADDRESS" value={user?.['ADDRESS'] || '123 Main St, Toronto, Canada'} />
                    <DetailRow label="LOCATION" value={user?.['LOCATION'] || 'Toronto, Canada'} />
                    <DetailRow label="EMAIL" value={user?.['EMAIL'] || 'sam@gmail.com'} />
                    <DetailRow label="PHONE NUMBER" value={user?.['PHONE NUMBER'] || '08012345678'} />
                </ModalCard>
                <ModalCard title="">
                    <DetailRow label="DESIGNATION" value={user?.['DESIGNATION'] || 'Admin'} />
                </ModalCard>
                <ModalCard title="">
                    <DetailRow label="USER STATUS" value={user?.['STATUS'] || 'Admin'} />
                </ModalCard>
            </div>
        </div>
    </div>;
};
export default Profile;