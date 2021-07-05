<template>
  <div>
    <ul class='news-list'>
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{job.points || 0}}
        </div>
        <!-- 기타영역 -->
        <div>
          <p class="news-title">
            <!-- <a :href="item.url">{{ item.title }}</a> -->
            <!-- <router-link :to='`item/${item.id}`'>
              {{item.title}}
            </router-link> -->
            <a :href="job.url">{{job.title}}</a>
          </p>
          <small>
            {{job.time_ago}}
            by
            <!-- <router-link :to="'/user'+ item.user">{{item.user}}</router-link> -->
            <!-- <router-link :to="`/user/${job.user}`">{{job.domain}}</router-link> -->
            <a :href="job.url">
              {{job.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a :href="job.url">{{job.title}}</a>
      <small>{{job.domain}}</small>
    </p> -->
  </div>
</template>

<script>

export default {

  created() {
    this.$store.dispatch('FETCH_JOBS');
  }
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