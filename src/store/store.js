import { configureStore } from '@reduxjs/toolkit';
import  { CoffeeApi } from '../api/CoffeeApi'


const store = configureStore({
    reducer: { [CoffeeApi.reducerPath]: CoffeeApi.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(CoffeeApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;