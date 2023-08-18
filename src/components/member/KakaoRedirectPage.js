import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { requestLogin } from "../../reducers/loginSlice";
// import { getAccessToken, getUserEmail } from "../../api/kakaApi";

const KakaoRedirectPage = () => {

    const [searchParams] = useSearchParams()

    const authCode = searchParams.get('code')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/api/member/kakao?code=${authCode}`).then(res => {
            console.log(res.data)
            const memberInfo = res.data;

            const nickname = memberInfo.nickname;

            dispatch(requestLogin(memberInfo))
            if (nickname === 'SOCIAL_MEMBER') {
                navigate('/member/modify')
            } else {
                navigate("/")
            }

        })
    }, [authCode])

    return (
        <div>
            {authCode}
        </div>
    );
}

export default KakaoRedirectPage;