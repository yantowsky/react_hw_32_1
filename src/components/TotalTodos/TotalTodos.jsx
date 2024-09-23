import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const TotalTodos = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    return (
        <Typography
            fontFamily={'Play'}
            variant='h5'
            marginLeft={"15px"}
        >
            {!itemsTodoList.length ? 'No ' : `Total: ${itemsTodoList.length} `}
            {itemsTodoList.length == 0 || itemsTodoList.length > 1 ? 'tasks' : 'task'}
        </Typography>
    );
}

export default TotalTodos;