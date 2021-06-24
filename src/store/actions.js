import {fetchAskList, fetchNewsList, fetchJobsList, fetchUserInfo} from '../api/index.js'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response);
                context.commit('SET_NEWS', response.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
    FETCH_ASK(context) {
        fetchAskList()
            .then(response => {
                console.log(response);
                context.commit('SET_ASK', response.data)
            })
            .catch(error => {
                console.log(error);
            })
        },
    FETCH_JOBS({commit}) {
        fetchJobsList()
            .then(({ data }) => {
                console.log({data});
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })
        },
        // name = userName
    FETCH_USER ({commit}, name) {
        fetchUserInfo (name)
            .then(({ data }) => {
                console.log({data});
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
