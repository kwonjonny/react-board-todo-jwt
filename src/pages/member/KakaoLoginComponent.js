import { Link } from "react-router-dom";


// 카카오 REST API KEY 
const REST_KEY = '0c51c8934055f8e28462b6d5cc17be9a'

// spring 으로 리다이렉트 
// 우리가 지정한 리다이렉트 uri 
const REDIRECT_URI = 'http://localhost:3000/member/kakao'

// 인가코드 kakao URL
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
// const kakaoURL = `https://kauth.kakao.com/oauth/authorize`
// client_id 쿼리스트링으로 클라이언트 아이디 추가해줘야한다 
// redirect_uri 도 쿼리스트링으로 추가 

// 카카오톡으로 로그인 시에 REDIRECT_URI 로 카카오가 인가 키를 발행해준다 
// EX: 이런 인가 키 지만 이건 휘발성이기 대문에 시간이지나면 쓸수가없다 
// http://localhost:3000/member/kakao?code=zfQ-7orDYSnVWzSecTnCBuHK1wE1CQ483WgUz5qIa8Q9Wxwp0P2S4XDH_OV0Wgn-OGo8-QopyNgAAAGJZojAig

// Access 토큰 Outh 기법 을 또 발행해줘야 사용자가 여러가지의 웹의 동작을 쓸수잇따 

const KakaoLoginComponent = () => {
    return (

        <div className="text-3xl text-black">
            <Link to={kakaoURL}>KAKAO LOGIN</Link>
        </div>

    );
}

export default KakaoLoginComponent;