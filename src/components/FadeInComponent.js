import React, { useState } from 'react';
import { Fade } from '@mui/material';

const FadeInComponent = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleOnLoad = () => {
        setShow(true);
    };

    const clonedChildren = React.cloneElement(children, { onLoad: handleOnLoad });

    return (
        <Fade in={show} timeout={1000}>
            {clonedChildren}
        </Fade>
    );
};

export default FadeInComponent;
