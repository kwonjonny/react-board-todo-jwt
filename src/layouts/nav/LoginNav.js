import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";


const LoginNav = () => {

    // 로그인한 상태 가져온다 
    const { email, nickname } = useSelector(state => state.login)

    console.log("LoginNav컴포넌트.........", email, nickname);

    if (email !== '') {
        return (
            <div>

                <div>
                    {email} - {nickname}
                </div>

                <div>
                    <CartNav></CartNav>
                </div>

            </div>
        );
    }
}

export default LoginNav;