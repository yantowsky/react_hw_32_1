import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTextSchema from '../../schemes/inputTextSchema';
import { fetchSwapi } from '../../features/getInfoSwapi/getInfoSwapiSlice';
import { Box, Button, Input, Typography } from '@mui/material';

const InputValueForm = ({ spanText, placeholder, titleButton, textButton, reducer }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(inputTextSchema)
    });

    const dispatch = useDispatch();
    const addValue = ({ inputValue }) => {
        dispatch(reducer({ inputValue }));
        reducer.type === 'swapi/setSwapi' && dispatch(fetchSwapi(inputValue));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(addValue)}>
            <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                gap={'10px'}
                p={'15px'}
            >
                {spanText &&
                    <Typography
                        component={'span'}
                        fontFamily={'Play'}
                        fontSize={'1.5rem'}
                        border={'2px solid'}
                        p={'4px 10px'}
                    >
                        {spanText}
                    </Typography>}
                <Input
                    sx={{
                        width: '100%',
                        fontFamily: 'Play',
                        fontSize: '1.5rem',
                        pl: '15px',
                        border: '2px solid',
                    }}
                    {...register('inputValue')}
                    type="text"
                    placeholder={placeholder}
                    autoFocus
                    autoComplete="off"
                />
                {<Typography
                    display={'flex'}
                    variant='body1'
                    fontFamily={'Play'}
                    whiteSpace={'nowrap'}
                    pl={'10px'}
                >
                    {errors.inputValue?.message}
                </Typography>}
                <Button
                    type='submit'
                    title={titleButton}
                    sx={{ border: '2px solid' }}
                >
                    {textButton}
                </Button>
            </Box >
        </form>
    );
}

export default InputValueForm;