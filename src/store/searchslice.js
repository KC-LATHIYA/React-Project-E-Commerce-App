import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
    name: "search",
    initialState: {
        search: ""
    },
    reducers: {
        dosearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { dosearch } = searchslice.actions
export default searchslice.reducer