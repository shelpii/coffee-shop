import { configureStore } from '@reduxjs/toolkit';
import  { CoffeeApi } from '../api/CoffeeApi';
import filters from '../Components/coffeeFilters/CoffeeSlice';


const store = configureStore({
    reducer: { filters, [CoffeeApi.reducerPath]: CoffeeApi.reducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(CoffeeApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;