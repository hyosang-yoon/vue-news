<template>
  <div>
    <div v-for="user in $store.state.news" :key="user.id">{{ user.title }}</div>
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