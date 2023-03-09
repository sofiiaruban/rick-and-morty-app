import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const idSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    updateId: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { updateId } = idSlice.actions;
export default idSlice.reducer;
