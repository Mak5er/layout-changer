import React from 'react';
import {Grid2, Box, Typography, IconButton, useTheme} from '@mui/material';
import {GitHub, Twitter, Telegram, Instagram} from '@mui/icons-material';

const Footer = () => {
    const theme = useTheme();

    return <Box
        component="footer"
        marginTop='1rem'
        width='100%'
        minHeight="2vh"
        sx={{backgroundColor: 'footer.default', position: 'relative'}}
    >
        <Grid2 container spacing={'20%'} alignItems="center" justifyContent="center"
               style={{position: 'relative', zIndex: 1}}>
            <Grid2 item md={4} xs={12} textAlign='center'>
                <Typography variant="body1">
                    Designed and Developed by <a href='https://github.com/Mak5er'
                                                 style={{color: 'inherit', textDecoration: 'none'}}>Maksym Reva</a>
                </Typography>
            </Grid2>
            <Grid2 item md={4} xs={12}>
                <Typography variant="body2" color="textSecondary" align="center" sx={{mt: 1}}>
                    {'Copyright © '}
                    <a href="https://makser.pp.ua" style={{color: 'inherit', textDecoration: 'none'}}>
                        Mak5er
                    </a>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Grid2>
            <Grid2 item md={4} xs={12} textAlign='center'>
                <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                    <IconButton aria-label="GitHub" href="https://github.com/Mak5er">
                        <GitHub sx={{ color: theme.palette.text.secondary3 }} />
                    </IconButton>
                    <IconButton aria-label="Twitter" href="https://x.com/Mak5er1">
                        <Twitter sx={{ color: theme.palette.text.secondary3 }} />
                    </IconButton>
                    <IconButton aria-label="Telegram" href="https://t.me/mak5er">
                        <Telegram sx={{ color: theme.palette.text.secondary3 }} />
                    </IconButton>
                    <IconButton aria-label="Instagram" href="https://www.instagram.com/mak5er/">
                        <Instagram sx={{ color: theme.palette.text.secondary3 }} />
                    </IconButton>
                </Box>
            </Grid2>
        </Grid2>
    </Box>;
};

export default Footer;