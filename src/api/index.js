import axios from 'axios';

//1. HTTP Request & Response와 관련된 기본설정
// 혹은 토큰값을 넣어줘도 됨
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}
//2. API 함수들을 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

export {
    fetchNewsList
}