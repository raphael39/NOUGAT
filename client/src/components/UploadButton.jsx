import React from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const UploadButton = ({ onFileSelect }) => {
    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (onFileSelect) {
            onFileSelect(file);
        }
    };

    return (
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
            >
                Upload
            </Button>
        </label>
    );
};

export default UploadButton;
