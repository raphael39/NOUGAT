import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'; // Dateisymbol
import { Container, Typography, Box } from '@mui/material';

const UploadButton = () => {
    const [fileName, setFileName] = useState('');

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            // Führen Sie hier weitere Aktionen mit der Datei durch, z.B. einlesen
        }
    };

    return (
        <Container style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                >
                    Datei hochladen
                </Button>
            </label>
            {fileName && (
                <Box mt={2} style={{ display: 'flex', alignItems: 'center' }}>
                    <InsertDriveFileIcon /> {/* Dateisymbol */}
                    <Typography variant="subtitle1" style={{ marginLeft: '10px' }}>
                        {fileName}
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default UploadButton;
