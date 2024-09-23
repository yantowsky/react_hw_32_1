import React from 'react';
import { useDispatch } from 'react-redux';
import { checkedItemTodoList } from '../../features/itemsTodoList/itemsTodoListSlice';
import { delItemTodoList } from '../../features/itemsTodoList/itemsTodoListSlice';
import { Checkbox, ListItem, ListItemText, Button } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';

const TodoItem = ({ id, checked, text }) => {
    const dispatch = useDispatch();

    return (
        <ListItem
            alignItems='center'
            disableGutters={true}
            sx={{ border: '2px solid' }}
            style={{ textDecoration: !checked ? 'none' : 'line-through' }}
        >
            <Checkbox
                checked={checked}
                onChange={() => dispatch(checkedItemTodoList({ id }))}
            />
            <ListItemText
                disableTypography={true}
                sx={{ fontSize: '1.3rem' }}
            >
                {text}
            </ListItemText>
            <Button
                title='Delete Task'
                onClick={() => dispatch(delItemTodoList({ id }))}
            >
                <DeleteForever fontSize='large'/>
            </Button>
        </ListItem>
    );
}

export default TodoItem;