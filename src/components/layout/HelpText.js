import React from 'react';
import { Typography, Box } from '@mui/material';

const HelpText = () => {
    return (
        <Box mt={4} px={2}>
            <Typography variant="h6" align="center" color="textPrimary">
                Цей інструмент допомагає швидко змінювати розкладку з англійської на українську та навпаки.
            </Typography>
            <Typography variant="body2" align="center" color="textSecondary" mt={1}>
                Всі введені дані залишаються конфіденційними і не передаються стороннім сервісам.
            </Typography>
        </Box>
    );
};

export default HelpText;