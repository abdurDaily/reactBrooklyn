import React from 'react';

const Btn = ({ btnContain, btnBg, btnText,marginRight }) => {
    return (
        <div>
            <a 
            style={{ 
                backgroundColor: btnBg,
                color: btnText,
                borderRadius:"4px",
                padding: "12px 24px",
                display:"inline-block",
                textDecoration:"none",
                fontFamily: "var(--font-family)",
                fontWeight: "600",
                fontSize: '16px',
                lineHeight: '150%',
                color: 'var(--gray-white)',
                marginRight:marginRight
             }}
            
            href="#">{ btnContain }</a>
        </div>
    );
};

export default Btn;