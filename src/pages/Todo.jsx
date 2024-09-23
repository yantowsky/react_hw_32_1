import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import InputValueForm from '../components/InputValueForm/InputValueForm';
import TodoList from '../components/TodoList/TodoList';
import EmptyTodoList from '../components/EmptyTodoList/EmptyTodoList';
import FollowError from '../components/ErrorBoundary/ErrorBoundary';
import { addItemTodoList } from '../features/itemsTodoList/itemsTodoListSlice';
import { Box } from '@mui/material';
import { AddBox } from '@mui/icons-material';

const Main = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    useEffect(() => {
        localStorage.setItem('todo_list', JSON.stringify(itemsTodoList));
    }, [itemsTodoList]);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <FollowError>
                <InputValueForm
                    placeholder='Add Task...'
                    textButton={<AddBox fontSize={'large'} />}
                    titleButton='Add Task'
                    reducer={addItemTodoList}
                />
                {itemsTodoList.length ? <TodoList /> : <EmptyTodoList />}
            </FollowError>
        </Box>
    );
}

export default Main;