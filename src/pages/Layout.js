import React from 'react';
import LayoutChanger from '../components/layout/LayoutChanger';
import HelpText from '../components/layout/HelpText';
import {Container, Typography} from '@mui/material';

const Layout = () => {
    return (
        <Container sx={{marginTop: "3rem"}}>
            <Typography variant="h3" align="center">
                Перетворення розкладки
            </Typography>
            <LayoutChanger />
            <HelpText />
        </Container>
    );
};

export default Layout;