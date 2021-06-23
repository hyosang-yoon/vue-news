import Vue from 'vue'
import Vuex from 'vuex';
import {fetchAskList, fetchNewsList, fetchJobsList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    mutations: {
        /* SET_NEWS안의 news는 response.data임 */
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs) {
            state.jobs = jobs
        }
    },
    actions: {
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
        }
    }
})
