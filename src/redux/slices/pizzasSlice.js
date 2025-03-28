import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchPizzasAPI } from '../services/pizzaAPI';

export const fetchPizzasThunk = createAsyncThunk('pizzas/fetchPizzasApi', fetchPizzasAPI)



const initialState = {
    pizzas: [],
    status: 'idle', 
    error: null
};

const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzasThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPizzasThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzasThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pizzaSlice.reducer;
