import React, { useState } from 'react';
import { createTheme, ThemeProvider, Switch } from '@mui/material';
import UploadButton from './components/UploadButton';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    const handleThemeChange = (event) => {
        setDarkMode(event.target.checked);
    };

    const handleFileSelect = (file) => {
        console.log('Ausgewählte Datei:', file);
        // Hier können Sie die Datei weiterverarbeiten
    };

    return (
        <ThemeProvider theme={theme}>
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <UploadButton onFileSelect={handleFileSelect} />
            {/* Rest Ihrer Komponenten */}
        </ThemeProvider>
    );
};

export default App;
