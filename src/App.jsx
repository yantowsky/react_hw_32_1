import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Container, Paper, Typography, createTheme } from '@mui/material';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const MainLazy = lazy(() => import('./pages/Main.jsx'));
const TodoLazy = lazy(() => import('./pages/Todo.jsx'));
const SwapiLazy = lazy(() => import('./pages/Swapi.jsx'));
const BaseCounterLazy = lazy(() => import('./pages/BaseCounter.jsx'));
const NotFoundLazy = lazy(() => import('./pages/NotFound.jsx'));

function App() {
    const darkMode = useSelector((state) => state.darkTheme.dark);
    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Paper sx={{ height: '100vh', fontFamily: 'Play' }}>
                    <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100vh',
                            p: '15px 0',
                            gap: '15px'
                        }}
                    >
                        <Header />
                        <Box
                            component={'main'}
                            sx={{
                                border: '2px solid',
                                display: 'flex',
                                flex: 1
                            }}
                        >
                            <Suspense
                                fallback={
                                    <Typography
                                        variant='h3'
                                        display={'flex'}
                                        flexDirection={'column'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        width={'100%'}
                                        height={'100%'}
                                        fontFamily={'Play'}>
                                        Loading...
                                    </Typography>
                                }
                            >
                                <Routes>
                                    <Route path='/*' element={<NotFoundLazy />} />
                                    <Route path='/' element={<MainLazy />} />
                                    <Route path='/todo' element={<TodoLazy />} />
                                    <Route path='/swapi' element={<SwapiLazy />} />
                                    <Route path='/counter' element={<BaseCounterLazy />} />
                                </Routes>
                            </Suspense>
                        </Box>
                        <Footer />
                    </Container>
                </Paper>
            </ThemeProvider>
        </>
    );
}

export default App