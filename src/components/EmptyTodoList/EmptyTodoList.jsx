import { Typography } from '@mui/material';
import React from 'react';

const EmptyTodoList = () => {
    return (
        <Typography
            variant='h4'
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'100%'}
            fontFamily={'Play'}
            borderTop={'2px solid'}
        >
            Your Todo-List is Empty
        </Typography>
    );
}

export default EmptyTodoList;