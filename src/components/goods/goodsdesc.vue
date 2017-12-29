<template>
  <!-- 商品图文详情页面 -->
    <div id='tmpl'>
        <h4 v-text='info.title'></h4>
        <p class="line"></p>
        <div v-html='info.content'></div>
    </div>

</template>

<script>

export default{
    data(){
        return{
            id:'',
            info:''
        }
    },
    created(){
        this.id=this.$route.params.id
        this.getInfo(this.info)
    },
    methods:{
        getInfo(id){
            var url = 'http://vue.studyit.io/api/goods/getdesc/'+this.id
            this.$http.get(url).then(res=>{
                if(res.body.status != 0){
                    alert('请求失败')
                    return
                }
                this.info=res.body.message[0]
            })
        }
    }
}

</script>

<style scoped>
#tmpl{
    padding:5px;
}
h4{
    color:#0094ff;
}
.line{
    height: 1px;
    border:1px solid rgba(0,0,0,0.4)
}
</style>