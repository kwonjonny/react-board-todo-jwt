

// 예전엔 index.js와 컴포넌트들을 만들어 상태관리를 했다면 이젠
// 리덕스 툴킷으로 관리를한다 

import { useDispatch } from "react-redux";
import { dec, inc } from "../../reducers/countSlice";

const CountButtons = () => {

    // use selector 의 반대 use dispatch 를 쓴다 
    // countDisplay에서는 selector 
    const dispatch = useDispatch()

    const handleClickInc = () => {
        // inc 의 함수를 쓴다 
        dispatch(inc(2, "INC"))
    }

    const handleClickDec = () => {
        // dec 의 함수를 쓴다 
        dispatch(dec(2, "DEC"))
    }

    return (
        <div>
            <div> <button onClick={handleClickInc }> INC </button> </div>
            <div> <button onClick={handleClickDec }> DEC </button> </div>

        </div>
    );
}

export default CountButtons;