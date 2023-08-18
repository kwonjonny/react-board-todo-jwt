import { createSlice } from "@reduxjs/toolkit";

// createSlice 객체 여러개 쓸거다 
const countSlice = createSlice({

    // 이름 지정 
    name: "CountSlice",
    // 상태를 관리해야될 데이터의 초기상태 
    initialState: { num: 5 },
    // reducer 는 동기화 처리 EX : => a바꾸면 b 
    // 객체 스타일 
    reducers: {
        // 증가 함수 첫번쨰 파라미터는 무조건 state
        inc: (state, param, third) => {
            console.log("inc 가 동작중: ", inc)
            console.log("param 가 동작중: ", param)
            console.log("third 가 동작중: ", third)

            // State안에는 num이 있고 
            console.log("state 가 동작중: ", state)
            // 새로운 상태를 바꾸기위해 state가 가지고있는 num값을 새로운 상태로 바꿔줌 
            return { num: state.num + 1 + param.payload}

        },
        dec: (state, param, third) => {
            console.log("dec가 동작중: ", dec)
            console.log("param 가 동작중: ", param)
            console.log("third 가 동작중: ", third)

            // State안에는 num이 있고 
            console.log("state 가 동작중: ", state)
            // 새로운 상태를 바꾸기위해 state가 가지고있는 num값을 새로운 상태로 바꿔줌 
            return { num: state.num - 1 - param.payload}
        }
    }

    // extraReducer 는 비동기 처리 

})

// 다른곳에서 쓰기위해 객체로 countSlice.actions로 정의 
export const { inc, dec } = countSlice.actions

// 외부에 노출은 reducer로 노출시킨다 
export default countSlice.reducer

