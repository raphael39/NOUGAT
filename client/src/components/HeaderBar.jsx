import React from 'react';
import { IconButton, Switch, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const HeaderBar = ({ darkMode, handleThemeChange }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: 2 }}>
            <IconButton onClick={handleThemeChange}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch checked={darkMode} onChange={handleThemeChange} />
        </Box>
    );
};

export default HeaderBar;
