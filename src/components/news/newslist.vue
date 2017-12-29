<!--新闻列表-->
<template>

    <div id='tmpl'>

        <!-- mui中的图文列表 -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,index) in list" :key='index'>
                <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.images.small">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text='item.title'></p>
                        <div class="ft">
                            <span>发表时间:{{item.year }}</span>
							<!-- | datefmt("YYYY-MM-DD HH:mm:ss") -->
                            <span class="click">点击数:{{item.title}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
		
    </div>

</template>


<script>
import common from '../../kits/common.js'
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getnewslist()
    },
    methods:{
        getnewslist(){
            var url = common.apidomain+'/v2/movie/in_theaters';
            this.$http.jsonp(url).then(function(res){
                var body = res.body;
                if(res.status != 200){
                    alert('请求失败');
                    return
                }
				this.list=body.subjects
            })
        }
    }
};
</script>


<style scoped>
.mui-table-view img{
    width: 60px;
    height: 60px;
}
.mui-table-view .mui-media-object{
    max-width: 60px;
    line-height: 60px;
}
.ft{
    margin-top: 1em;
    font-size:14px;
    color:#0094ff;
}
.ft .click{
    margin-left:20px;
}
</style>
