import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
    return (
        <Typography
            variant='h2'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            height={'100%'}
            fontFamily={'Play'}
        >
            Page not found
        </Typography>
    );
}

export default NotFound;