<template>
  <div>
    <list-item>

    </list-item>
    <!-- <ul class='news-list'>
      <li v-for="job in this.$store.state.jobs" :key="job.id" class="post">
        // 포인트 영역
        <div class="points">
          {{job.points || 0}}
        </div>
        // 기타영역
        <div>
          <p class="news-title">
            //<a :href="item.url">{{ item.title }}</a>
            //<router-link :to='`item/${item.id}`'>
            //  {{item.title}}
            //</router-link>
            <a :href="job.url">{{job.title}}</a>
          </p>
          <small>
            {{job.time_ago}}
            by
            //<router-link :to="'/user'+ item.user">{{item.user}}</router-link>
            //<router-link :to="`/user/${job.user}`">{{job.domain}}</router-link>
            <a :href="job.url">
              {{job.domain}}
            </a>
          </small>
        </div>
      </li>
    </ul>
    //<p v-for="job in this.$store.state.jobs" :key="job.id">
    //  <a :href="job.url">{{job.title}}</a>
    //  <small>{{job.domain}}</small>
    //</p> -->
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: { 
    ListItem 
  },
  mixins: [ListMixin]

  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  }

</script>
