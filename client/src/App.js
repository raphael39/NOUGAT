import React, { useState } from 'react';
import { createTheme, ThemeProvider, Switch, Box, IconButton, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadButton from './components/UploadButton';
import HeaderBar from './components/HeaderBar';
import EditorPage from './components/EditorPage';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Mond-Icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sonnen-Icon

const App = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);


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
      console.log('Ausgewählte Datei in App.js:', file);
      setSelectedFile(file);
      // Hier können Sie die Datei weiterverarbeiten
  };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* Fügt Baseline-Stile hinzu und ermöglicht die Hintergrundfarbanpassung */}

            <Router>
              <HeaderBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
              <Routes>
                <Route path="/" element={<UploadButton onFileSelect={handleFileSelect} />} />
                <Route path="/editor" element={<EditorPage selectedFile={selectedFile} />} />
              </Routes>          
            </Router>

            
        </ThemeProvider>
    );
};

export default App;
