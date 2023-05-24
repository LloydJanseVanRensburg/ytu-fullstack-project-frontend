import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />

            <Component {...pageProps} />
        </ThemeProvider>
    );
}
