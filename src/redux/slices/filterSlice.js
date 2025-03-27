import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        categoryId: 0,
        sortTypeId: 0,
        categories: [ 
          { id: 0, name: 'Все' },
          { id: 1, name: 'Мясные' },
          { id: 2, name: 'Вегетарианская' },
          { id: 3, name: 'Гриль' },
          { id: 4, name: 'Острые' },
          { id: 5, name: 'Закрытые' }
        ],
        filteredPizzas: [], 
    },
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortTypeId(state, action) {
            state.sortTypeId = action.payload;
        },
        filterPizzas(state, action) {
           state.filteredPizzas = action.payload
        }
    },
});

export const { setCategoryId, setSortTypeId, filterPizzas } = filterSlice.actions;
export default filterSlice.reducer;