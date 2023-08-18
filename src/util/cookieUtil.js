import { Cookies } from "react-cookie";



const cookies = new Cookies();

                            //이름 값 day
export const setCookie = (cookieName, value, days) => {

    // 쿠키의 시간 지정 
    const expires = new Date();
    expires.setUTCDate(expires.getUTCDate+days);
                                    // 전체 어플리케이션 내에서 쿠키 사용 가능 
    cookies.set(cookieName, value, { path: "/", expires:expires})
    
}

export const getCookie = (cookieName) => {

    return cookies.get(cookieName)

}

// cookie 의 remove는 경로를 setCookie와 똑같이준다 
export const removeCookie = (cookieName, path="/") => {
    cookies.remove(cookieName, {path:path} )
}