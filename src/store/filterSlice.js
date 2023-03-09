import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  filteredList: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    updateFilteredList: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});
export const { updateInputValue, updateFilteredList } = filterSlice.actions;
export default filterSlice.reducer;
