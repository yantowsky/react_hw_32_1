import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TotalTodos from '../TotalTodos/TotalTodos';
import ClearButton from '../ClearButton/ClearButton';
import { BottomNavigation, BottomNavigationAction, Typography, Box } from '@mui/material';
import { Phone, Mail, Telegram, GitHub } from '@mui/icons-material';

const Footer = () => {
    const yearNow = new Date().getFullYear();
    const location = useLocation();
    const counter = useSelector((state) => state.counter.value);

    return (
        <footer>
            <Box
                display={'flex'}
                flexDirection={'row-reverse'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ p: '5px', border: '2px solid' }}
            >
                <BottomNavigation sx={{ w: 300, backgroundColor: 'initial' }}>
                    <BottomNavigationAction
                        icon={<Phone fontSize='large' />}
                        component={Link}
                        to='tel:+380955020032'
                        title='Phone'
                    />
                    <BottomNavigationAction
                        icon={<Mail fontSize='large' />}
                        component={Link}
                        to='mailto:it.yantowsky@gmail.com'
                        title='Mail'
                    />
                    <BottomNavigationAction
                        icon={<Telegram fontSize='large' />}
                        component={Link}
                        to='https://t.me/Yantowsky'
                        title='Telegram'
                    />
                    <BottomNavigationAction
                        icon={<GitHub fontSize='large' />}
                        component={Link}
                        to='https://github.com/yantowsky'
                        title='GitHub'
                    />
                </BottomNavigation>
                {location.pathname === "/" &&
                    <Typography
                        fontFamily={'Play'}
                        variant='h5'
                        marginLeft={"15px"}
                    >
                        © {yearNow}
                    </Typography>
                }
                {location.pathname === "/todo" && <TotalTodos />}
                {location.pathname === "/swapi" && <ClearButton />}
                {location.pathname === "/counter" &&
                    <Typography
                        fontFamily={'Play'}
                        variant='h5'
                        marginLeft={"15px"}
                    >
                        Volume: {counter}
                    </Typography>
                }
            </Box>
        </footer>
    );
}

export default Footer;