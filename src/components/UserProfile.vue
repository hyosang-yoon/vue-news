<template>
  <div>
    <div>
      User
    </div>
    <div>
      <!-- <router-link :to='`/user/${userInfo.user}`'>
        {{userInfo.id}}
      </router-link> -->
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      
    </div>
    <div>
      <!-- {{userInfo.created}} -->
      <slot name="time">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info : Object
  },
  // computed: {
  //     userInfo() {
  //       return this.$store.state.user;
  //     }
  //   },
}
</script>

<style>

</style>