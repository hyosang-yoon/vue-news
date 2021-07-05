<template>
  <div>
    <p>
      name = {{userInfo.id}}
    </p>
    <p>
      karma = {{userInfo.karma}}
    </p>
    <p>
      created = {{userInfo.created}}
    </p>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    computed: {
      userInfo() {
        return this.$store.state.user;
      }
    },
    created() {
      const userName = this.$route.params.id;
      // axios.get(`https://api.hnpwa.com/v0/user${userName}`);
      this.$store.dispatch('FETCH_USER', userName)
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