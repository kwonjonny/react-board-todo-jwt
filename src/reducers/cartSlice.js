import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// 상태 데이터가 추가되더라도 initSate 커스첨하기위해 
const initState = {
    items: [],
    loading: false
}

// 외부에서 사용 가능하게 export
export const addCartThunk = createAsyncThunk('addCartThunk', async (item) => {
    // 새로운 아이템 추가
    const res = await axios.post('http://localhost:8080/api/cart/add', item)
    return res.data();

})

// 외부에서 사용 가능하게 Export 
export const getCartThunk = createAsyncThunk('getCartThunk', async (email) => {

    if(!email){
        return new Promise((resolve, reject) => {
            resolve([])
        })
    }

    const res = await axios.get(`http://localhost:8080/api/cart/${email}`)
    return res.data
})

// 항상 객체로 들어간다 
const cartSlice = createSlice({

    name: "cartSlice",
    initialState: initState,
    extraReducers: (builder) => {
        // 애션의 페이로드 실제 데이터
        builder.addCase(addCartThunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.items = action.payload;
        })
            .addCase(getCartThunk.fulfilled, (state, action) => {
                console.log("getCartThunk fullfilled...");
                console.log(action.payload)
                state.items = action.payload
            })

    }


})

export default cartSlice.reducer;