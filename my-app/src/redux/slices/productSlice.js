import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productApiController from "../../services/product.service.js";

export const productBannerApi = createAsyncThunk("product/listview", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.bannerproduct(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const productOfYearApi = createAsyncThunk("product/productofyear", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.productofyear(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const newProductArrivalApi = createAsyncThunk("product/newarrival", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.newarrival(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const bestSellerApi = createAsyncThunk("product/bestseller", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.bestseller(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const ProductDetailsApi = createAsyncThunk("product/details", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.detail(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const ProductSearchApi = createAsyncThunk("product/search", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.search(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const productRatingApi = createAsyncThunk("product/search", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.productrates(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const compareProductApi = createAsyncThunk("product/compare", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.search(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});

export const shopFilteredProductApi = createAsyncThunk("product/filteration", async (formValues, thunkAPI) => {
  try {
    const response = await productApiController.productwithfilters(formValues, thunkAPI);
    if (response && response.data && response.data.status) {
      return response.data;
    } else {
      const errorMessage = response && response.data && response.data.message || "Error occurred";
      throw new Error(errorMessage);
    }
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
    throw new Error(errorMessage);
  }
});


const initialState = {
  isproductOfYear: [],
  isProductBannerListView: [],
  isNewProductArrival: [],
  isBestSeller: [],
  isProductSearch: [],
  isProductDetail: "",
  isProductDetailTab: "shipping_and_return",
  iscompareProduct: [],
  isComparedProduct: [],
  isShopProductList: [],
  isShopViewChanger:"grid_view",
  isApiStatus: {
    productBannerApi: "",
    productOfYearApi: "",
    newProductArrivalApi: "",
    bestSellerApi: "",
    ProductDetailsApi: "",
    ProductSearchApi: "",
    shopFilteredProductApi: ""
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
    ShopViewChanger:(state, action)=>{
      state.isShopViewChanger = action.payload;
    },
    ProductDetailTab: (state, action) => {
      state.isProductDetailTab = action.payload;
    },
    ProductCompare: (state, action) => {
      const existingIndex = state.isComparedProduct.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        // If the item with the same ID already exists, replace it
        state.isComparedProduct[existingIndex] = action.payload;
      } else {
        // If it's a new item, push it to the array
        state.isComparedProduct.push(action.payload);
      }
    },
    RemoveProductFromCompare: (state, action) => {
      // Assuming action.payload contains the ID of the product to be removed
      const productIdToRemove = action.payload.id;
      state.isComparedProduct = state.isComparedProduct.filter(item => item.id !== productIdToRemove);
    },
    RemoveAllProductFromCompare: (state, action) => {
      // const id = action.pa
      state.isComparedProduct = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(shopFilteredProductApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, shopFilteredProductApi: "loading" };
      })
      .addCase(shopFilteredProductApi.fulfilled, (state, action) => {
        state.isShopProductList = action.payload;
        state.isApiStatus = { ...state.isApiStatus, shopFilteredProductApi: "succeeded" };
      })
      .addCase(shopFilteredProductApi.rejected, (state) => {
        state.isShopProductList = [];
        state.isApiStatus = { ...state.isApiStatus, shopFilteredProductApi: "failed" };
      })
      .addCase(compareProductApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, compareProductApi: "loading" };
      })
      .addCase(compareProductApi.fulfilled, (state, action) => {
        state.iscompareProduct = action.payload;
        state.isApiStatus = { ...state.isApiStatus, compareProductApi: "succeeded" };
      })
      .addCase(compareProductApi.rejected, (state) => {
        state.iscompareProduct = [];
        state.isApiStatus = { ...state.isApiStatus, compareProductApi: "failed" };
      })
      .addCase(ProductSearchApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, ProductSearchApi: "loading" };
      })
      .addCase(ProductSearchApi.fulfilled, (state, action) => {
        state.isProductSearch = action.payload;
        state.isApiStatus = { ...state.isApiStatus, ProductSearchApi: "succeeded" };
      })
      .addCase(ProductSearchApi.rejected, (state) => {
        state.isProductSearch = [];
        state.isApiStatus = { ...state.isApiStatus, ProductSearchApi: "failed" };
      })
      .addCase(ProductDetailsApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, ProductDetailsApi: "loading" };
      })
      .addCase(ProductDetailsApi.fulfilled, (state, action) => {
        state.isProductDetail = action.payload;
        state.isApiStatus = { ...state.isApiStatus, ProductDetailsApi: "succeeded" };
      })
      .addCase(ProductDetailsApi.rejected, (state) => {
        state.isProductDetail = "";
        state.isApiStatus = { ...state.isApiStatus, ProductDetailsApi: "failed" };
      })
      .addCase(bestSellerApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, bestSellerApi: "loading" };
      })
      .addCase(bestSellerApi.fulfilled, (state, action) => {
        state.isBestSeller = action.payload;
        state.isApiStatus = { ...state.isApiStatus, bestSellerApi: "succeeded" };
      })
      .addCase(bestSellerApi.rejected, (state) => {
        state.isBestSeller = [];
        state.isApiStatus = { ...state.isApiStatus, bestSellerApi: "failed" };
      })
      .addCase(newProductArrivalApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, newProductArrivalApi: "loading" };
      })
      .addCase(newProductArrivalApi.fulfilled, (state, action) => {
        state.isNewProductArrival = action.payload;
        state.isApiStatus = { ...state.isApiStatus, newProductArrivalApi: "succeeded" };
      })
      .addCase(newProductArrivalApi.rejected, (state) => {
        state.isNewProductArrival = [];
        state.isApiStatus = { ...state.isApiStatus, newProductArrivalApi: "failed" };
      })
      .addCase(productOfYearApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, productOfYearApi: "loading" };
      })
      .addCase(productOfYearApi.fulfilled, (state, action) => {
        state.isproductOfYear = action.payload;
        state.isApiStatus = { ...state.isApiStatus, productOfYearApi: "succeeded" };
      })
      .addCase(productOfYearApi.rejected, (state) => {
        state.isproductOfYear = [];
        state.isApiStatus = { ...state.isApiStatus, productOfYearApi: "failed" };
      })
      .addCase(productBannerApi.pending, (state) => {
        state.isApiStatus = { ...state.isApiStatus, productBannerApi: "loading" };
      })
      .addCase(productBannerApi.fulfilled, (state, action) => {
        state.isProductBannerListView = action.payload;
        state.isApiStatus = { ...state.isApiStatus, productBannerApi: "succeeded" };
      })
      .addCase(productBannerApi.rejected, (state) => {
        state.isProductBannerListView = [];
        state.isApiStatus = { ...state.isApiStatus, productBannerApi: "failed" };
      });
  },
});



export const { reset, ProductDetailTab, ProductCompare, RemoveProductFromCompare, RemoveAllProductFromCompare,ShopViewChanger } = productSlice.actions;
export default productSlice.reducer;
