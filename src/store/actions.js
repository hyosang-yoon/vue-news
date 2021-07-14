import {fetchAskList, fetchNewsList, fetchJobsList, fetchUserInfo, fetchItem, fetchList } from '../api/index.js'

export default {
    // promise
    // FETCH_NEWS(context) {
    //   return fetchNewsList()
    //     .then(response => {
    //       console.log(response);
    //       context.commit('SET_NEWS', response.data);
    //       return response;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // },

    //async

    async FETCH_NEWS(context) {
      const response = await fetchNewsList();
      context.commit('SET_NEWS', response.data);
      return response;
    },
    // FETCH_ASK(context) {
    //   return fetchAskList()
    //     .then(response => {
    //       console.log(response);
    //       context.commit('SET_ASK', response.data)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     })
    // },

    async FETCH_ASK(context) {
      const response = await fetchAskList();
      context.commit('SET_ASK', response.data);
      return response;
    },
    // FETCH_JOBS({commit}) {
    //   return fetchJobsList()
    //     .then(({ data }) => {
    //         console.log({data});
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    //   },

    async FETCH_JOBS({commit}) {
      const response = await fetchJobsList();
      commit('SET_JOBS', response.data);
      return response;
    }  ,
      // name = userName
  FETCH_USER ({commit}, name) {
      return fetchUserInfo (name)
        .then(({ data }) => {
            console.log({data});
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error);
        })
      },
  FETCH_ITEM ({commit}, id) {
      return fetchItem (id)
        .then(({data}) => {
            console.log({data});
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error)
        })
  },
  // FETCH_LIST( {commit}, pageName) {
  //   return fetchList(pageName)
  //     .then (({data}) => commit('SET_LIST',data))
  //     .catch(error => console.log(error))
  // }
  async FETCH_LIST ( {commit}, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}
