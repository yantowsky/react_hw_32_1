import { configureStore } from '@reduxjs/toolkit';
import itemsTodoListReducer from '../features/itemsTodoList/itemsTodoListSlice';
import baseCounterReducer from '../features/baseCounter/baseCounterSlice';
import getInfoSwapiReducer from '../features/getInfoSwapi/getInfoSwapiSlice';
import darkThemeReducer from '../features/darkTheme/darkThemeSlice';


export default configureStore({
    reducer: {
        itemsTodoList: itemsTodoListReducer,
        counter: baseCounterReducer,
        swapi: getInfoSwapiReducer,
        darkTheme: darkThemeReducer,
    },
});