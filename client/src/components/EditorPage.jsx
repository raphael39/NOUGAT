import React from "react";
import { Button, Typography, FormGroup, FormControlLabel, Checkbox, Box, TextField } from '@mui/material';

const EditorPage = ({ selectedFile }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Dateiname */}
      <Typography variant="h5" gutterBottom>
        {selectedFile.name}
      </Typography>

      {/* Einstellungsoptionen */}
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="Tool Wechsel nach jeder Schicht" />
        <FormControlLabel control={<Checkbox />} label="Reiseroute Nicht über Bauteil" />

        {/* Eingabefelder */}
        <TextField label= "Höhe Schicht A" type="number" variant="outlined" margin="normal" />
        <TextField label="Höhe Schicht B" type="number" variant="outlined" margin="normal" />
        <TextField label="Reiseroute Geschwindigkeit" type="number" variant="outlined" margin="normal" />
        <TextField label="Reiseroute Nicht über Bauteil" type="number" variant="outlined" margin="normal" />
      </FormGroup>

      {/* Button "Datei verarbeiten" */}
      <Box style={{ position: 'fixed', right: 20, bottom: 20 }}>
        <Button variant="contained" color="primary">
          Datei verarbeiten
        </Button>
      </Box>
    </div>
  );
};

export default EditorPage;
