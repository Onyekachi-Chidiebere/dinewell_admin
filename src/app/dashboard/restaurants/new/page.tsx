import React from 'react';
import styles from './page.module.css';

const NewRestaurantPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <div style={{
                    marginBottom: '40px',
                    textAlign: 'center',
                    padding: '2px',
                    border: '1px solid #EBEEFF',
                    borderRadius: '25px',
                    backgroundColor: '#F6F8FA',
                    display: 'inline-block',
                    width: '100%'
                }}>
                    <h1 style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#49526A'
                    }}>New Restaurant Setup</h1>
                </div>

                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <div style={{ position: 'relative' }}>
                        <span style={asteriskStyle}>*</span>
                        <input
                            type="text"
                            placeholder="Restaurant Name here"
                            className={`${styles.input} ${styles.inputWithAsterisk}`}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={asteriskStyle}>*</span>
                        <input
                            type="email"
                            placeholder="Email"
                            className={`${styles.input} ${styles.inputWithAsterisk}`}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={asteriskStyle}>*</span>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className={`${styles.input} ${styles.inputWithAsterisk}`}
                        />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <span style={asteriskStyle}>*</span>
                        <input
                            type="text"
                            placeholder="Address"
                            className={`${styles.input} ${styles.inputWithAsterisk}`}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Location"
                        className={styles.input}
                    />

                    <div style={{
                        border: '1px dashed #D2D3F3',
                        borderRadius: '25px',
                        padding: '20px',
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            {/* <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '12px',
                                backgroundColor: '#F6F8FA',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#9B87F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z" stroke="#9B87F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 15L16 10L5 21" stroke="#9B87F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div> */}
                            <span style={{ color: '#6B7280', fontSize: '14px' }}>Restaurant Logo</span>
                        </div>
                        <button
                            type="button"
                            style={{
                                backgroundColor: 'white',
                                color: '#828DA9',
                                border: '1px solid #D2D3F3',
                                borderRadius: '25px',
                                padding: '8px 16px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                fontSize: '14px',
                                fontWeight: 500,
                                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            Upload
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.1" y="0.1" width="15.8" height="15.8" rx="7.9" fill="white" />
                                <rect x="0.1" y="0.1" width="15.8" height="15.8" rx="7.9" stroke="#EBEEFF" stroke-width="0.2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77919 9.4457C7.90123 9.32366 8.0991 9.32366 8.22113 9.4457L9.05447 10.279C9.17651 10.4011 9.17651 10.5989 9.05447 10.721C8.93243 10.843 8.73456 10.843 8.61253 10.721L8.31266 10.4211V12.1667C8.31266 12.3393 8.17275 12.4792 8.00016 12.4792C7.82757 12.4792 7.68766 12.3393 7.68766 12.1667V10.4211L7.3878 10.721C7.26576 10.843 7.0679 10.843 6.94586 10.721C6.82382 10.5989 6.82382 10.4011 6.94586 10.279L7.77919 9.4457Z" fill="#C4CBF2" />
                                <path d="M8.19858 4.5625C7.0527 4.5625 6.13012 5.47951 6.13012 6.60294C6.13012 6.79551 6.15708 6.98146 6.20737 7.15755C6.41453 7.21734 6.60846 7.30787 6.78368 7.42379C6.92763 7.51901 6.96713 7.71289 6.87191 7.85683C6.77669 8.00078 6.58281 8.04028 6.43886 7.94506C6.28019 7.8401 6.09982 7.7648 5.9057 7.72714C5.81328 7.7092 5.71752 7.69975 5.61921 7.69975C4.80208 7.69975 4.146 8.35341 4.146 9.15196C4.146 9.95052 4.80208 10.6042 5.61921 10.6042C5.7918 10.6042 5.93171 10.7441 5.93171 10.9167C5.93171 11.0893 5.7918 11.2292 5.61921 11.2292C4.4639 11.2292 3.521 10.3026 3.521 9.15196C3.521 8.02519 4.42511 7.11336 5.54746 7.07595C5.51963 6.92231 5.50512 6.76422 5.50512 6.60294C5.50512 5.12738 6.71452 3.9375 8.19858 3.9375C9.51444 3.9375 10.6137 4.87237 10.8466 6.11303C11.8049 6.51979 12.4793 7.4622 12.4793 8.56373C12.4793 9.84455 11.5678 10.9101 10.3572 11.169C10.1884 11.2051 10.0223 11.0976 9.98624 10.9288C9.95015 10.76 10.0577 10.5939 10.2265 10.5578C11.1597 10.3583 11.8543 9.53874 11.8543 8.56373C11.8543 7.67342 11.2755 6.91286 10.4637 6.63526C10.2518 6.5628 10.0238 6.52328 9.78588 6.52328C9.54312 6.52328 9.3108 6.56441 9.09527 6.63969C8.93234 6.6966 8.75412 6.61066 8.69721 6.44772C8.64029 6.28478 8.72624 6.10656 8.88918 6.04965C9.17012 5.95152 9.47207 5.89828 9.78588 5.89828C9.90899 5.89828 10.0303 5.90648 10.1492 5.92236C9.8656 5.1318 9.10106 4.5625 8.19858 4.5625Z" fill="#C4CBF2" />
                            </svg>

                        </button>
                    </div>
                    <p style={{
                        color: '#888',
                        fontSize: '12px',
                        textAlign: 'left',
                        margin: '-10px 0 0 20px'
                    }}>10Mb Max</p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '20px'
                    }}>

                    </div>
                </form>
            </div>
        </div>
    );
};

const asteriskStyle: React.CSSProperties = {
    color: 'red',
    position: 'absolute',
    left: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    zIndex: 1
};

export default NewRestaurantPage;