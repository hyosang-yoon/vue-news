<template>
  <div>
    <!-- 컴포넌트 등록후 아이템 -->
    <list-item></list-item>
  </div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue'
// import bus from '../utils/bus.js'

export default {
  components: {
    ListItem,
  },
  // created() {
  //   bus.$emit('start:spinner');
  //   this.$store.dispatch('FETCH_NEWS')
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   bus.$emit('end:spinner');
  // }
    
    
    // fetchNewsList()
    // .then(respose => {
    //   this.users = respose.data;
    //   })
    // .catch(error => {
    //   console.log(error);
    // })
}
</script>

<style>
</style>