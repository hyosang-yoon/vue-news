<template>
  <div>
    <ul class='news-list'>
      <li v-for="item in askItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{item.points}}
        </div>
        <!-- 기타영역 -->
        <div>
          <p class="news-title">
            <!-- <a :href="item.url">{{ item.title }}</a> -->
            <router-link :to='`item/${item.id}`'>
              {{item.title}}
            </router-link>
          </p>
          <small>
            {{item.time_ago}}
            by
            <!-- <router-link :to="'/user'+ item.user">{{item.user}}</router-link> -->
            <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
  import {
    mapGetters
  } from 'vuex';

  export default {
    computed: {
      // 객체 표기법
      ...mapGetters({
        askItems: 'fetchedAsk'
      }),
    },
    // 배열 표기법
    // ...mapGetters([
    //     fetchedAsk
    // ])
    //   #2
    //       ...mapState({
    //           ask: state => state.ask
    //       })
    //   },
    //  #1
    // ask() {
    //     return this.$store.state.ask;
    // }
    created() {
      this.$store.dispatch('FETCH_ASK');
    },
  }
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b884
}
.news-title {
  margin: 0;
}
.link-test {
  color:  #828282
}
</style>