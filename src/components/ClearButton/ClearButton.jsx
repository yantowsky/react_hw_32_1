import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delSwapi } from '../../features/getInfoSwapi/getInfoSwapiSlice';
import { IconButton } from '@mui/material';
import { CleaningServices } from '@mui/icons-material';

const ClearButton = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.swapi);

    return (
        <IconButton
            sx={{ p: '0 20px' }}
            title='Clear Data'
            disableRipple={true}
            onClick={() => dispatch(delSwapi())}
            disabled={status === null && true}
        >
            <CleaningServices fontSize='large' />
        </IconButton>
    )
}

export default ClearButton;