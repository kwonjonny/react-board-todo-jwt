import { createSlice } from "@reduxjs/toolkit";

// 객체 => 로 정의 
// store에 등록 todoSlice
const todoSlice = createSlice({


    name:"todoSlice",
    // 빈 배열 state 자체가 배열 
    initialState: ['aaaa', 'bbbb'],
    // 객체 reducers 
    reducers: {
        addTodo: (state, param) => {

            console.log("todoSlice state 동작중 :", state)
            console.log("todoSlice param 동작중 :", param)
            
            // 배열에 ...state전개 연산자 & param.payload 를 전달 
            return [...state, param.payload]
        }
    }
})

// 다른곳에서 쓰기위해 객체로 countSlice.actions로 정의 
export const { addTodo } = todoSlice.actions

// 외부에 노출은 reducer로 노출시킨다 
export default todoSlice.reducer