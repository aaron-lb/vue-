<template>
  
    <div id='tmpl'>
        <div class="title">
            <h4 v-text='info.title'></h4>
            <p>{{info.add_time | datefmt()}} {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html='info.content'></div>
    </div>

</template>

<script>
    
    export default{
        data(){
            return {
                id:'',
                info:{
                    "id": 13,
                   "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
                   "click": 2,
                   "add_time": "2015-04-16T03:50:28.000Z",
                   "content":"sdfsdf会尽快了鸡蛋大明白哒"
                }
            }
        },
        created(){
            this.id=this.$route.params.id;
            // getInfo()
        },
        methods:{
            // getInfo(){
            //     var url = 'http://webhm.top:8899/api/getnew/'+this.id;
            //     this.$http.get(url).then(function(res){
            //         var body = res.body;
            //         if(body.status != 0){
            //             alert(body.message);
            //             return 
            //         }
            //         else{
            //             this.info = body.message[0]
            //         }
            //     })
            // }
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
