import { Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import { MoodBad } from '@mui/icons-material';

const fallBack = (
    <Typography
        variant='h4'
        fontFamily={'Play'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'100%'}>
        <MoodBad
            fontSize='large'
            sx={{ mr: '5px' }}
        />
        Opps, sorry! You have an error
    </Typography>
);

const FollowError = ({ children }) => (
    <ErrorBoundary fallback={fallBack}>
        {children}
    </ErrorBoundary>
);

export default FollowError;