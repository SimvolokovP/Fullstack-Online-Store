import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDevice } from "../../models/IDevice";
import { fetchDevices, fetchTypes, fetchBrands } from "../../API/devicesApi";
import { AxiosError } from "axios";
import { IType } from "../../models/IType";
import { IBrand } from "../../models/IBrand";

type DevicesState = {
  devices: { count: number; rows: IDevice[] } | null;
  error: string | null;
  isLoading: boolean;
  limit: number;
  page: number;
  types: IType[] | null;
  brands: IBrand[] | null;
};

const initialState: DevicesState = {
  error: null,
  isLoading: false,
  devices: { count: 0, rows: [] as IDevice[] },
  page: 1,
  limit: 3,
  types: [] as IType[],
  brands: [] as IBrand[],
};

export const getAllProducts = createAsyncThunk(
  "auth/getAllProducts",
  async (
    keys: { typeId: number; brandId: number; page: number; limit: number },
    { rejectWithValue }
  ) => {
    try {
      const resp = await fetchDevices(
        keys.typeId,
        keys.brandId,
        keys.page,
        keys.limit
      );
      return resp;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Неизвестная ошибка"
        );
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const getAllTypes = createAsyncThunk(
  "auth/getAllTypes",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetchTypes();
      return resp;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Неизвестная ошибка"
        );
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

export const getAllBrands = createAsyncThunk(
  "auth/getAllBrands",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetchBrands();
      return resp;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(
          error.response?.data?.message || "Неизвестная ошибка"
        );
      }
      return rejectWithValue("Неизвестная ошибка");
    }
  }
);

const devicesSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getAllProducts.fulfilled,
        (state, action: PayloadAction<{ count: number; rows: [] }>) => {
          state.devices = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllTypes.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getAllTypes.fulfilled,
        (state, action: PayloadAction<IType[]>) => {
          state.types = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getAllTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllBrands.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(
        getAllBrands.fulfilled,
        (state, action: PayloadAction<IBrand[]>) => {
          state.brands = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getAllBrands.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default devicesSlice.reducer;
