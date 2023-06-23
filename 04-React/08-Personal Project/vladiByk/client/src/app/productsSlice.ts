import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import axios from "axios";

const PRODUCTS_URL = "api/v1/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { data } = await axios.get(PRODUCTS_URL);
    const products = await data.products;
    return products;
  }
);

export interface ProductType {
  imgUrl: string;
  name: string;
  price: number;
  _id: string;
}

export interface UseProductsType {
  products: ProductType[];
  isLoading: boolean;
  fetchError: unknown;
}

const initProductsState: UseProductsType = {
  products: [],
  isLoading: true,
  fetchError: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: { value: initProductsState },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.value.isLoading = false;
      state.value.products = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.value.isLoading = true;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.value.fetchError = action.error;
    });
  },
});

export const selectproducts = (state: RootState) => state.products.value;

export default productsSlice.reducer;
