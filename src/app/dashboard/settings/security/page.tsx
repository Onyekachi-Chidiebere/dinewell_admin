import ModalCard, { DetailRow } from "@/components/ModalCard";
import { Avatar } from "@mantine/core";

const Security = () => {
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
                <p style={{border:'0.6px solid #D2D3F3',width:'fit-content', padding:'0 8px', borderRadius:'12px', backgroundColor:'#F6F8FA', color:'#828DA9', fontSize:'12px', fontWeight:500, fontFamily:'var(--font-red-hat-display)' }}>Click any field below to make changes</p>
               
            </div>
        </div>
    </div>;
};
export default Security;