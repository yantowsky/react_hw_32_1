import React from 'react';
import InputValueForm from '../components/InputValueForm/InputValueForm';
import { setSwapi } from '../features/getInfoSwapi/getInfoSwapiSlice';
import { useSelector } from 'react-redux';
import { getReasonPhrase } from 'http-status-codes';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { GetApp } from '@mui/icons-material';

const Swapi = () => {
    const { inputValue, objDataSwapi, status, error } = useSelector(state => state.swapi);
    const arrDataSwapi = [];

    for (const [key, value] of Object.entries(objDataSwapi)) {
        const newValue = Array.isArray(value) ? value.join('; ') : value;
        arrDataSwapi.push(`${key}: ${newValue}`);
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            {status !== 'resolved' ? (
                <InputValueForm
                    spanText='https://swapi.dev/api/'
                    placeholder='Need a hint? try people/1/ or planets/3/ or starships/9/'
                    textButton={<GetApp fontSize='large' />}
                    titleButton='Get info'
                    reducer={setSwapi}
                />
            ) : (
                <Typography
                    component={'span'}
                    fontFamily='Play'
                    fontSize='1.5rem'
                    m={'15px'}
                    p={'4px 10px'}
                    border={'2px solid'}
                >
                    https://swapi.dev/api/{inputValue}
                </Typography>
            )}
            {status === 'loading' && (
                <Typography
                    component={'span'}
                    variant='h3'
                    borderTop={'2px solid'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'100%'}
                    fontFamily={'Play'}
                >
                    Loading SWAPI...
                </Typography>
            )}
            {status === 'resolved' && (
                <List
                    sx={{
                        borderTop: '2px solid',
                        p: '15px', display: 'flex',
                        flexDirection: 'column',
                        gap: '5px'
                    }}
                >
                    {arrDataSwapi.map((item, index) => (
                        <ListItem
                            alignItems='center'
                            sx={{ border: '2px solid' }}
                            key={index}
                        >
                            <ListItemText
                                disableTypography={true}
                                sx={{ fontSize: '1.3rem' }}
                            >
                                {item}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            )}
            {status === 'rejected' && (
                <Typography
                    component={'span'}
                    variant='h4'
                    borderTop={'2px solid'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'100%'}
                    fontFamily={'Play'}
                >
                    Server Error! Status Code: {error} - {getReasonPhrase(error)}
                </Typography>
            )}
        </Box >
    );
}

export default Swapi;