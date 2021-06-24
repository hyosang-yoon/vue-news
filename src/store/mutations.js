export default {
    /* SET_NEWS안의 news는 response.data임 */
    SET_NEWS(state, news) {
        state.news = news;
    },
    SET_ASK(state, ask) {
        state.ask = ask;
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs
    },
    SET_USER(state,user) {
        state.user = user;
    }
}