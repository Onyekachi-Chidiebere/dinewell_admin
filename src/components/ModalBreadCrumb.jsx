import Image from "next/image";

const ModalBreadCrumb = ({ title, subtitle, icon, count }) => {
    const containerStyle = {
        display: 'flex',
        flexDirection: icon ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: icon ? 'flex-start' : 'center',
        padding: icon ? '10px' : '16px',
        width: '48%',
        border: '1px solid #D2D3F3',
        borderTop: '5px solid #D2D3F3',
        borderRadius: '12px',
        backgroundColor: '#FFFFFF',
    };

    const topSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    };

    const textContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const titleStyle = {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: '12px',
        color: '#8A92A6',
        margin: 0,
        fontWeight: 400,
        lineHeight: '18px',
        letterSpacing: '0.02em',
    };

    const subtitleStyle = {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: '14px',
        color: '#1A202C',
        margin: 0,
        fontWeight: 700,
        lineHeight: '21px',
        letterSpacing: '0.02em',
        textTransform: 'uppercase',
    };

    const countStyle = {
        fontFamily: '"Red Hat Display", sans-serif',
        fontSize: '28px',
        fontWeight: 700,
        color: '#1A202C',
        margin: 0,
        lineHeight: '42px',
        letterSpacing: '0.02em',
    };

    return (
        <div style={containerStyle}>
            <div style={topSectionStyle}>
                {icon && <Image src={icon} alt={title || 'icon'} width={24} height={24} />}
                <div style={textContainerStyle}>
                    <p style={titleStyle}>{title}</p>
                    <p style={subtitleStyle}>{subtitle}</p>
                </div>
            </div>
            <div>
                <p style={countStyle}>{count}</p>
            </div>
        </div>
    );
};

export default ModalBreadCrumb;