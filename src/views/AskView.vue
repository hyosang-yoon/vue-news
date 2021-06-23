<template>
  <div>
    <div v-for="item in askItems" :key="item.id"> {{item.title}} </div>
  </div>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    // 객체 표기법
    ...mapGetters({
           askItems : 'fetchedAsk'
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

<style>

</style>