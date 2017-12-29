<template>
  <!-- 商品评论 -->
    <div id='tmpl'>

        <comment :id='id'></comment>        

    </div>

</template>

<script>
import comment from '../subcom/comment.vue'
export default{
    components:{
        comment:comment
    },
    data(){
        return{
            id:""
        }
    },
    created(){
        this.id=this.$route.params.id
    }
}

</script>

<style scoped>


</style>