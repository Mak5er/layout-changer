import React from 'react';
import {Container, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

const Error404 = () => {
    const theme = useTheme();

    return (
        <Container
            style={{
                position: 'relative',
                paddingTop: '150px',
                justifyContent: 'center',
                textAlign: 'center'
            }}
        >
            <Typography
                variant="h1"
                gutterBottom
                style={{
                    fontWeight: 'bold',
                    fontSize: '10rem',
                    color: theme.palette.primary.main
                }}
            >
                404
            </Typography>
            <Typography variant="h4" color="textPrimary" gutterBottom>
                You've lost in the Matrix, Neo
            </Typography>
            <Button
                variant="outlined"
                component={Link}
                to="/"
                style={{
                    marginTop: '20px',
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main
                }}
            >
                Go Home
            </Button>
        </Container>
    );
};

export default Error404;