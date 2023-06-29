import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getService } from "./api-config";

let stateType = '';
let singleRecord = false;
export const fetchService = createAsyncThunk('', async (params) => {
    stateType = params.stateType;
         return getService(params.path);
    }
)
const initialState = type => {
     return {
        [type]: [],
        loading: true,
        finishWithErrors: false,
        errorMessage: 'Hemos tenido problemas solicitando la informacion'

     }
}
const getSlice = createSlice({
    name: 'fetch',
    initialState: initialState('users'),
    reducers: {
        cleardata: state => {
            state[stateType] = []
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state[stateType] = state[stateType].filter(data => data.id !== itemId)
        }
    },
    extraReducers:(builder) =>  {

        builder.addCase(fetchService.pending, state => {
          state.loading = true;
        });

        builder.addCase(fetchService.fulfilled, (state, action) => {
            state.loading = false;
            state.finishWithErrors = false;
            state[stateType] = action.payload;
        });

        builder.addCase(fetchService.rejected, state => {
            state.loading = false;
            state.finishWithErrors = true;
        });

    }, 
})

export const { cleardata, removeItem } = getSlice.actions;
export default getSlice.reducer;