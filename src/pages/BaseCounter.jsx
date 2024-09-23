import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../features/baseCounter/baseCounterSlice';
import { Box, Typography, Button, ButtonGroup } from '@mui/material';
import { AddBox, IndeterminateCheckBox } from '@mui/icons-material';

const BaseCounter = () => {
    const dispatch = useDispatch();

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            gap={'10px'}
        >
            <Typography
                variant='h4'
                fontFamily={'Play'}
            >
                Counter
            </Typography>
            <ButtonGroup size='large'>
                <Button
                    sx={{ border: '2px solid' }}
                    onClick={() => dispatch(decrement())}
                    title='decrement'
                >
                    <IndeterminateCheckBox fontSize='large' />
                </Button>
                <Button
                    sx={{ border: '2px solid' }}
                    onClick={() => dispatch(increment())}
                    title='increment'
                >
                    <AddBox fontSize='large' />
                </Button>
            </ButtonGroup>
        </Box>
    )
}

export default BaseCounter;