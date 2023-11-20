import React, { useState } from 'react';
import { Container, Typography, Box, Fab } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const UploadButton = () => {
    const [fileName, setFileName] = useState('');
    const navigate = useNavigate();

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            // Führen Sie hier weitere Aktionen mit der Datei durch, z.B. einlesen
        }
    };

    const handleProceed = () => {
        navigate('/editor');
    }; 

    return (
        <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <Typography variant="h4" gutterBottom>
                Wählen Sie eine GCode-Datei aus
            </Typography>
            <label htmlFor="upload-button">
                <input
                    style={{ display: 'none' }}
                    id="upload-button"
                    type="file"
                    onChange={handleUpload}
                />
                <Button
                    variant="contained"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                    size="large"
                    sx={{ mb: 2 }}
                >
                    Datei hochladen
                </Button>
            </label>
            {fileName && (
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <InsertDriveFileIcon />
                    <Typography variant="subtitle1" sx={{ ml: 1 }}>
                        {fileName}
                    </Typography>
                </Box>
            )}
            {fileName && (
                <Box sx={{ position: 'fixed', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Fab color="primary" onClick={handleProceed} sx={{ mb: 1 }}>
                        <ArrowForwardIcon />
                    </Fab>
                    <Typography variant="caption">
                        Datei modifizieren
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default UploadButton;
