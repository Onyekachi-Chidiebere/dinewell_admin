import styles from './page.module.css';

const Security = () => {
    return <div>
        <div style={{ width: '70%', margin: 'auto', border: '1px solid #EAEEF2', borderRadius: '20px' }}>
            <div style={{ background: "url('/maze-bg.svg') no-repeat left 32px center", height: '100px' }} />
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ border: '0.6px solid #D2D3F3', width: 'fit-content', padding: '0 8px', borderRadius: '12px', backgroundColor: '#F6F8FA', color: '#828DA9', fontSize: '12px', fontWeight: 500, fontFamily: 'var(--font-red-hat-display)' }}>Click any field below to make changes</p>
                <div style={{ position: 'relative' }}>
                    <span style={asteriskStyle}>*</span>
                    <input
                        type="email"
                        placeholder="Old Password"
                        className={`${styles.input} ${styles.inputWithAsterisk}`}
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <span style={asteriskStyle}>*</span>
                    <input
                        type="email"
                        placeholder="New Password Here"
                        className={`${styles.input} ${styles.inputWithAsterisk}`}
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <span style={asteriskStyle}>*</span>
                    <input
                        type="email"
                        placeholder="New Password Again"
                        className={`${styles.input} ${styles.inputWithAsterisk}`}
                    />
                </div>
            </div>
        </div>
    </div>;
};
export default Security;
const asteriskStyle: React.CSSProperties = {
    color: 'red',
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 1
};