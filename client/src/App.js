import React, { useState } from 'react';
import { createTheme, ThemeProvider, Switch, Box, IconButton, CssBaseline } from '@mui/material';
import UploadButton from './components/UploadButton';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Mond-Icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sonnen-Icon

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            background: {
                default: darkMode ? '#121212' : '#fff', // Dunkler Hintergrund für Dark Mode und heller für Light Mode
            },
        },
    });

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
    };

    const handleFileSelect = (file) => {
      console.log('Ausgewählte Datei:', file);
      // Hier können Sie die Datei weiterverarbeiten
  };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Fügt Baseline-Stile hinzu und ermöglicht die Hintergrundfarbanpassung */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 2 }}>
                <IconButton onClick={handleThemeChange}>
                    {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <Switch checked={darkMode} onChange={handleThemeChange} />
            </Box>
            <UploadButton onFileSelect={handleFileSelect} />
            {/* Rest Ihrer Komponenten */}
        </ThemeProvider>
    );
};

export default App;
