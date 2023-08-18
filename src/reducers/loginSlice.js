import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberApi";


// Thunk 는 파라미터를 선언해놓고 람다로 만든다음 그안에서 비동기호 출 
export const postLoginThunk = createAsyncThunk('postLoginThunk', (params) => {
    return postLogin(params)
})

const loadCookie = () => {
    const loginObj = getCookie("login")

    console.log("loginObj: ", loginObj)
    if (!loginObj) {
        return initState;
    }
    return loginObj;
}

const initState = {
    email: '',
    nickname: '',
    admin: false,
    signed: false,
    loading: false,
    errosMsg: null
}

const loginSlice = createSlice({

    name: 'loginSlice',
    // 초기 결과를 LoadCookie를 해서 그 결과를 loginObj로 
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, action) => {
            const payload = action.payload
            console.log("loginSlice requestLogin: ", payload)

            // 다음으로 유지해야하는 함수를 반한 pure function
            const loginObj = { email: payload.email, signed: true }

            setCookie("login", JSON.stringify(payload), 1)

            return payload;
        }
    },
    // 이 함수 엑스트라 리듀서는 return을 해주지않아도 그다음상태가 자동으로나옴 
    extraReducers: (builder) => {
        // fulfuilled 파라미터2개 
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {
            console.log("fulfulled", action.payload)
            const {email, nickname, admin, errosMsg} = action.payload;
            
            if(errosMsg) {
               state.errosMsg = errosMsg
               return 
            }

            // server에서나온 진짜 데이터 
            state = action.payload;
            // payload에 엑섹스 토큰과 리프레스토큰도잇다 

            setCookie("login", JSON.stringify(action.payload), 1)

            return {...action.payload, loading : false}
        })
            .addCase(postLoginThunk.pending, (state, action) => {
                console.log("pending")
                state.loading = true;

            })
            .addCase(postLoginThunk.rejected, (state, action) => {
                console.log("rejected")
            })
    }
})

// // 다른곳에서 쓰기위해 객체로 loginSlice.actions로 정의 
export const { requestLogin } = loginSlice.actions

// 외부에 노출은 reducer로 노출시킨다 
export default loginSlice.reducer

