import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoginNav from "./LoginNav";

const SampleNav = () => {

    // sampleNav 에서 todo의 배열을 받는다 
    // 장바구니 or 로그인 가능 ㅋㅋ 
    const todoArr = useSelector(state => state.todo)

    return ( 
        <div className="flex m-6 p-4 text-white font-extrabold justify-center">

        <div className="flex m-6 p-4 text-white font-extrabold">
            <Link to={"/"}>Main</Link>
            <span className="bg-red-600 font-extrabold">{todoArr.length}</span>
        </div>

        <div className="flex m-6 p-4 text-white font-extrabold">
            <Link to={"/about"}>About</Link>
        </div>

        <div className="flex m-6 p-4 text-white font-extrabold">
            <Link to={"/products/list"}>Products</Link>
        </div>

        <div className="flex m-6 p-4 text-white font-extrabold">
            <Link to={"/board/list"}>Board</Link>
        </div>

        <div className="flex m-6 p-4 text-white font-extrabold">
            <LoginNav></LoginNav>
        </div>

        </div>
     );
}
 
export default SampleNav;