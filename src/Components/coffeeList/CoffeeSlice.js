import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from '../../hooks/http.hooks';

const coffeeAdapter = createEntityAdapter();

const initialState = coffeeAdapter.getInitialState({
    coffeeLoadingStatus: 'wait'
})

export const fetchCoffee = createAsyncThunk (
    'heroes/fetchHeroes',
    () => {
      const {request} = useHttp();
      return request("http://localhost:3001/coffee");
    }
  )

const CoffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchCoffee.pending, state => {state.coffeeLoadingStatus = "loading"})
          .addCase(fetchCoffee.fulfilled, (state, action) => {
            state.coffeeLoadingStatus = "wait";
            coffeeAdapter.setAll(state, action.payload);
          })
          .addCase(fetchCoffee.rejected, (state) => {state.coffeeLoadingStatus = "error"})
          .addDefaultCase(() => {})
      }
});

const { actions, reducer } = CoffeeSlice

export default reducer;

