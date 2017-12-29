<template>
  
    <div id='tmpl'>
        <div class="title">      <!--实现新闻信息-->
            <h4 v-text='info.title'></h4>
            <p>{{info.year }}年 </p>
        </div>
        <div id="content" v-html='info.summary'></div>

<!-- 实现评论组件的集成 -->
        <comment :id='id'></comment>


    </div>

</template>

<script>
    import common from '../../kits/common.js'
    import comment from '../subcom/comment.vue'         //导入评论组件
    export default{
        components:{                      //注册评论组件为当前组件的子组件
            comment:comment
        },
        data(){
            return {
                id:'',
                info:{}
            }
        },
        created(){
            this.id=this.$route.params.id;//获取到url里带的参数id
            this.getInfo()
        },
        methods:{
            getInfo(){
                var url = common.apidomain+'/v2/movie/subject/'+this.id;
                this.$http.jsonp(url).then(function(res){
                    var body = res.body;
                    if(res.status != 200){
                        alert('请求失败');
                        return 
                    }
                    else{
                        this.info = body
                    }
                })
            }
        }
    }

</script>

<style scoped>
.title h4{
    color:#0094ff;
}
.title p {
    color:rgba(0,0,0,0.5)
}
.title,#content{
    padding:5px;
}

</style>
