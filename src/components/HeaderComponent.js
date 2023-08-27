import React from 'react';
import "../styles.css";

const HeaderComponent = ({ title, orientation }) => {
    return (
        <div className="grid-title-group">
            {orientation === 'left' && (
                <>
                    <div className="grid-title">
                        <p>{title}</p>
                    </div>
                    <div className="grid-title-line"></div>
                </>
            )}

            {orientation === 'right' && (
                <>
                    <div className="grid-title-line"></div>
                    <div className="grid-title">
                        <p>{title}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeaderComponent;
