// themes.js
import { createTheme } from '@mui/material/styles';
import 'typeface-work-sans';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E1F0FF', // MedWish light blue
        },
        secondary: {
            main: '#00355E', // MedWish dark blue
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem', // size for h1 elements
        },
        h2: {
            fontSize: '2rem', // size for h2 elements
        },
        body1: {
            fontSize: '1rem', // size for normal text
        },
    },
});

export default theme;
