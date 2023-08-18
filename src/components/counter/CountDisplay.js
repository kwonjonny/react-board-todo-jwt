import { useSelector } from "react-redux";



const CountDisplay = () => {

    // redux 에서는 useSelector를 사용한다 
                            // selector 안에는 전체 스토어중 내가 받는 내용물은 이것이다 
                            // 원하는 내용물을 받을수있다 
                            // countSlice.js 에 있는 num 5 를 받아온다 
    const obj = useSelector( state => state.counter)

    console.log('obj: ',obj)

    return (
    <div className="text-4xl">
        COUNT: {obj.num}
    </div>
    );
}
 
export default CountDisplay;