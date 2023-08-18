import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";
import cartSlice from "../reducers/cartSlice";


// 함수의 결과물은 스토어 
// 다른 곳에서 쓰기위해 export default 
export default configureStore({

     reducer : {
        // 이름과 값으로 준다
        // reducer 에서 디폴트로 만든 reducer countSlice를 세팅 시켜준다  
        counter : countSlice,
        // todoSlice등록 
        todo : todoSlice,
        // loginSlice등록 
        login : loginSlice,
        // cartSlice등록 
        cart : cartSlice
     }

})

