import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";


const initState = {
    email: 'thistrik@naver.com',
    pw: '14c2c2ba-bc98-40a4-99c5-0659a369757f'
}

const LoginComponent = () => {

    // login 
    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({...initState})

    const dispatch = useDispatch()

    const errosMsg = loginState.errosMsg;

    console.log('ERRORMESG',errosMsg)

    return ( 
        <div>
            {/* 모달 띄워야한다 원래 이거는 */}
            <div className="text-3xl bg-red-500"> Loading : {loginState.loading ? '로그인 중' :''}</div>

           {errosMsg ? <div className="text-3xl bg-red-500">이메일과 패스워드 다시 확인해주세여</div> : <></>}

            <div>
                <label>Email</label>
                <input type="text" name="email" onChange={()=>{}} value={loginInfo.email}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pw" onChange={()=>{}} value={loginInfo.pw}></input>
            </div>
            <div>
                <button onClick={() => dispatch( postLoginThunk(loginInfo))}>LOGIN</button>
            </div>
        </div>
     );
}
 
export default LoginComponent;