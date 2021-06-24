<template>
  <div>
    <p v-for="item in $store.state.news" :key="item.id">
      <a :href="item.url" >{{ item.title }}</a>
      <small> {{item.time_ago}} by 
        <!-- <router-link :to="'/user'+ item.user">{{item.user}}</router-link> -->
        <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      </small>
    </p>
  </div>
  
</template>

<script>

export default {
  created () {
    this.$store.dispatch('FETCH_NEWS');
    
    
    // fetchNewsList()
    // .then(respose => {
    //   this.users = respose.data;
    //   })
    // .catch(error => {
    //   console.log(error);
    // })

  }
}
</script>

<style>

</style>