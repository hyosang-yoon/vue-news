// 1. ItemView 생성
// 2. 라우터에 ItemView로 갈 수 있는 라우터 정보 등록

// 3. 해당 페이지 컴포턴트로 이동햇을 때 반아온 파람을 이용해서 데이터 표시
<template>
  <div>
    <!-- <p>{{fetchedItem.title}}</p>
    <div>
        {{fetchedItem.content}}
    </div> -->
    <section>
        <div>    
            <div>
                User
            </div>
            <div>
                <router-link :to='`/user/${fetchedItem.user}`'>
                    {{fetchedItem.user}}
                </router-link>
            </div>
            <div>
                {{fetchedItem.time_ago}}
            </div>
            <h2>
                {{fetchedItem.title}}
            </h2>
        </div>
    </section>
    <section>
        <div v-html="fetchedItem.content" />
    </section>
  </div>
</template>

<script> 
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters (['fetchedItem'])
    },
    created() {
        const itemId= this.$route.params.id;
        this .$store .dispatch('FETCH_ITEM', itemId)
    }
}


</script>

<style>

</style>