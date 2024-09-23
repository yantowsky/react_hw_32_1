import React from 'react';
import { useSelector } from 'react-redux'
import TodoItem from '../TodoItem/TodoItem';
import { List } from '@mui/material';

const TodoList = () => {
    const itemsTodoList = useSelector(state => state.itemsTodoList.itemsTodoList);

    return (
        <List
            sx={{
                borderTop: '2px solid',
                p: '15px', display: 'flex',
                flexDirection: 'column',
                gap: '5px'
            }}
        >
            {itemsTodoList.map((item) => (
                <TodoItem
                    key={item.id}
                    {...item}
                />
            ))}
        </List>
    );
}

export default TodoList;