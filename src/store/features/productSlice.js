import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../component/services/api";

export const getAllProducts = createAsyncThunk(
  "product/getAllProducts",
  async () => {
    const response = await api.get("/products/all");  
    return response.data.data;
  }
);

export const getAllBrands = createAsyncThunk(
  "product/getAllBrands",
  async () => {
    const response = await api.get("/products/distinct/brands");  
    return response.data.data;
  }
);
const initialState = {
  products: [],
  brands :[],
  selectedBrands:[],
  errorMessage: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.errorMessage = null;       
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.errorMessage = action.error.message;      
      })
      .addCase(getAllBrands.fulfilled, (state, action) =>{
        state.brands = action.payload;
      })
  },
});

export default productSlice.reducer;
