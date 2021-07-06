<template>
  <div>
    <list-item>
    </list-item>
    <!-- <ul class='news-list'>
      <li v-for="item in askItems" :key="item.id" class="post">
        포인트 영역
        <div class="points">
          {{item.points}}
        </div>
        기타영역
        <div>
          <p class="news-title">
            // <a :href="item.url">{{ item.title }}</a>
            <router-link :to='`item/${item.id}`'>
              {{item.title}}
            </router-link>
          </p>
          <small>
            {{item.time_ago}}
            by
            // <router-link :to="'/user'+ item.user">{{item.user}}</router-link>
            <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>


<script>
import ListItem from '../components/ListItem.vue'

export default {
  components : {
    ListItem,
  }
}

//   import {
//     mapGetters
//   } from 'vuex';
// import ListItem from '../components/ListItem.vue';

//   export default {
//   components: { ListItem },
//     computed: {
//       // 객체 표기법
//       ...mapGetters({
//         askItems: 'fetchedAsk'
//       }),
//     },
//     // 배열 표기법
//     // ...mapGetters([
//     //     fetchedAsk
//     // ])
//     //   #2
//     //       ...mapState({
//     //           ask: state => state.ask
//     //       })
//     //   },
//     //  #1
//     // ask() {
//     //     return this.$store.state.ask;
//     // }
//     created() {
//       this.$store.dispatch('FETCH_ASK');
//     },
//   }
</script>
