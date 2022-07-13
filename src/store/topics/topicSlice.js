import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = []

export const fetchTopics = createAsyncThunk('topics/fetchTopic', async () =>{
    const response = await axios({
        method: "GET",
        url: "https://api.unsplash.com/topics?client_id=wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg",
        params: { page: 1, per_page: 21 },
      });
    return response.data
})

const topicSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchTopics.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default topicSlice.reducer

export const selectAllTopics = (state) => state.topics