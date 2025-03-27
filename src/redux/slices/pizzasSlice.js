import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async () => {
    const response = await fetch('https://65999411652b843dea52f53a.mockapi.io/pizza');
    return await response.json();
});

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
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.pizzas = action.payload;
            })
            .addCase(fetchPizzas.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default pizzaSlice.reducer;
