import Vue from 'vue';
import VueRouter from 'vue-router'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import NewsView from '../views/NewsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import bus from '../utils/bus.js'
import {store} from '../store/index.js'
// import CreateListView from '../views/CreateListView.js';


Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      // component: CreateListView('NewsView'),
      component: NewsView,
      beforeEnter: (to,from , next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(`${from}'fetched'`);
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/ask',
      name: 'ask',
      // component: CreateListView('AskView'),
      component: AskView,
      beforeEnter: (to,from , next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(`${from}'fetched'`);
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: CreateListView('JobsView'),
      component: JobsView,
      beforeEnter: (to,from , next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log(`${from}'fetched'`);
            // bus.$emit('end:spinner');
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ]
});
