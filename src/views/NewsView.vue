<template>
  <div>
    <!-- 컴포넌트 등록후 아이템 -->
    <list-item></list-item>
  </div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue'

export default {
  components: {
    ListItem,
  }
    
    
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