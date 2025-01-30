import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('menSlice/fetchData', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

const menSlice = createSlice({
    initialState: {
        data: '',
        men: [],
        women: [],
        jewelery: [],
        electronics: [],
        loading: false,
        error: null
    },
    name: 'menSlice',
    reducers: {
        menAction: () => {},
        womenAction: () => {},
        jeweleryAction: () => {},
        electronicsAction: () => {},
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload;
            state.men = action.payload.filter((index) => index.category === "men's clothing");
            state.women = action.payload.filter((index) => index.category === "women's clothing");
            state.jewelery = action.payload.filter((index) => index.category === "jewelery");
            state.electronics = action.payload.filter((index) => index.category === "electronics");
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.data = [];
            state.men = [];
            state.women = [];
            state.jewelery = [];
            state.electronics = [];
        })
    }
})

export const {menAction} = menSlice.actions;
export default menSlice.reducer;
