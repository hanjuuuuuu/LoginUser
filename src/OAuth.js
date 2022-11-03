const kakao = {
    clientID: 'e7f0a2350af00b6762aba9343b42f7b2',
    redirectUri: 'http://localhost:8091/auth/kakao/callback',
    logoutUri: 'http://localhost:8091/auth/kakao/logout'
}

const naver = {
    clientID: 'vX4A7h0O5FfuRH_3wyPn',
    redirectUri: 'http://localhost:8091/auth/naver/callback',
    state_string:  Math.random().toString(36).substr(3, 14)
}

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,account_email`;
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver.clientID}&state=${naver.state_string}&redirect_uri=${naver.redirectUri}`;