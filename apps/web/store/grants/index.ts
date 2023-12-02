import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { Grant, } from "../../types";
// Define a slice of your application state
interface ProjectState {
  loading: boolean;
  selectedGrant: Grant
  allGrant: Grant[];
  totalCount: number;

}

const initialState: ProjectState = {
  selectedGrant: undefined,
  allGrant: [],
  loading: false,
  totalCount:0
};

export const useGrantDispatch = () => {
  const dispatch = useDispatch();
  const dispatchAllGrants = (allGrants: Grant[]) => {
    console.log("allGrants", allGrants);
    dispatch(getLoadAllGrants(allGrants));
  };
  return {
    dispatchAllGrants,

  };
};

export const grantSlice = createSlice({
  name: "grant",
  initialState,
  reducers: {
    getLoadAllGrants: (state, action: PayloadAction<Grant[]>) => {
      state.allGrant = action.payload;
    },

    setSelectedGrant: (
      state,
      action: PayloadAction<Grant | undefined>
    ) => {
      state.selectedGrant = action.payload;
    },
    isLoading: (state) => {
      // state.value += 1;
      state.loading = false;
    },
    isLoadingFinish: (state) => {
      state.loading = false;
    },
  },
});

export const {
  isLoading,
  isLoadingFinish,
  getLoadAllGrants
  // getLoadAllThemes
} = grantSlice.actions;
