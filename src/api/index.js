import axios from 'axios';

//1. HTTP Request & Response와 관련된 기본설정
// 혹은 토큰값을 넣어줘도 됨
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}
//2. API 함수들을 정리
async function fetchNewsList() {
    try {
        const response = await axios.get(`${config.baseUrl}news/1.json`);    
        return response;
    } catch (error) {
        console.log(error);
    }
    
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
function fetchItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItem,
    fetchList,
}