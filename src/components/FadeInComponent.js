import React, { useEffect, useRef, useState } from 'react';
import { Fade } from '@mui/material';

const FadeInComponent = ({ children }) => {
    const [show, setShow] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            });
        });

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={elementRef}>
            <Fade in={show} timeout={1000}>
                {children}
            </Fade>
        </div>
    );
};

export default FadeInComponent;
