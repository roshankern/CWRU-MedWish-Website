import React from 'react';

const styles = {
    titleGroup: {
        width: 'calc(100% - 80px)',  // 40px padding on each side
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',  // Center the items
        padding: '0 40px',  // 40px padding on each side
        margin: '20px auto',
    },
    title: {
        color: '#00355E',
        fontSize: '30px',
        fontWeight: 'bold',
        marginRight: '20px',  // Gap between text and line
    },
    titleRight: {
        marginLeft: '20px',  // Gap between line and text when orientation is 'right'
    },
    titleLine: {
        flex: 0.9,
        height: '1px',
        backgroundColor: '#00355E',
    },
};

const HeaderComponent = ({ title, orientation }) => {
    return (
        <div style={styles.titleGroup}>
            {orientation === 'left' && (
                <>
                    <div style={styles.title}>
                        <p>{title}</p>
                    </div>
                    <div style={styles.titleLine}></div>
                </>
            )}

            {orientation === 'right' && (
                <>
                    <div style={styles.titleLine}></div>
                    <div style={{ ...styles.title, ...styles.titleRight }}>
                        <p>{title}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderComponent;
