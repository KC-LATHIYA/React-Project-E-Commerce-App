import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products"

export const GetAllPtoduct = createAsyncThunk("getallproduct", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(API_URL)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to load all product");
    }
})

export const GetPtoductByID = createAsyncThunk("getproductbyid", async (id, { rejectWithValue }) => {
    try {
        const res = await axios.get(`API_URL/${id}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to load selected product");
    }
})

export const CreatePtoduct = createAsyncThunk("createproduct", async (productdata, { rejectWithValue }) => {
    try {
        const res = await axios.post(API_URL, productdata)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to create product");
    }
})

export const UpdatePtoduct = createAsyncThunk("updateproduct", async ({ id, newname, newprice, newdesc, newcate, newimg }, { rejectWithValue }) => {
    try {
        const res = await axios.put(`${API_URL}/${id}`, {
            title: newname,
            price: newprice,
            description: newdesc,
            category: newcate,
            image: newimg
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to update product");
    }
})

export const DeletePtoduct = createAsyncThunk("DeleteProduct", async (id, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${API_URL}${id}`)
        return id
    } catch (error) {
        return rejectWithValue(error.response?.data || "Failed to load all product");
    }
})

const productslice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        product: [],
        selectedproduct: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            //get all product
            .addCase(GetAllPtoduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(GetAllPtoduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
                state.error = null
            })
            .addCase(GetAllPtoduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //get product by id
            .addCase(GetPtoductByID.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(GetPtoductByID.fulfilled, (state, action) => {
                state.loading = false
                state.selectedproduct = action.payload
                state.error = null
            })
            .addCase(GetPtoductByID.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //create product
            .addCase(CreatePtoduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(CreatePtoduct.fulfilled, (state, action) => {
                state.loading = false;

                console.log("%c[CreatePtoduct.fulfilled] Action payload:", "color: green;", action.payload);
                console.log("%c[CreatePtoduct.fulfilled] Product list BEFORE update:", "color: orange;", [...state.product]);

                state.product.push(action.payload); // or use state.product = [...state.product, action.payload] for immutability

                console.log("%c[CreatePtoduct.fulfilled] Product list AFTER update:", "color: blue;", [...state.product]);

                state.error = null;
            })
            .addCase(CreatePtoduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //update product
            .addCase(UpdatePtoduct.pending, (state) => {
                state.loading = true    
                state.error = null
            })
            .addCase(UpdatePtoduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = state.product.map((item) => item.id === action.payload ? action.payload.data : item)
                state.error = null
            })
            .addCase(UpdatePtoduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })

            //delete product
            .addCase(DeletePtoduct.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(DeletePtoduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = state.product.filter((item) => item.id !== action.payload.id)
                state.error = null
            })
            .addCase(DeletePtoduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default productslice.reducer