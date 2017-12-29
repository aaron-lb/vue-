<!--评论功能子组件开发-->
<template>
    
    <div id='tmpl'>
        {{id}}
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder='请输入内容...' v-model='postcontent'></textarea>
            <mt-button type="primary" size='large' @click='postcomment'>提交</mt-button>
        </div>

        <!-- 评论信息列表 -->
        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <!-- mui中的列表 -->
            <div v-for='(item,index) in list'>
                <div class="title">
                <span>第{{index+1}}楼</span>
                <span>{{item.userinfo.nick}}</span>
                <span>{{item.timeDifference }}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">{{item.content}}</li>
                </ul>
            </div>

        </div>

        <!-- 加载更多按钮 -->
        <mt-button type="danger" size="large" plain  @click="getmore">加载更多</mt-button>
        

    </div>

</template>

<script>
import common from "../../kits/common.js";

export default {
  props: ["id"], //用来接收父组件传过来的id值
  data() {
    return {
      postcontent: "",
      list:[],
      pageindex:1
    };
  },
  created(){
      this.getcommentlist(this.pageindex)

      this.list=[]
  },
  methods: {
    getcommentlist(pageindex){//获取数据
        var url="http://coral.qq.com/article/1983169624/comment";
        this.$http.jsonp(url,{params:{reqnum:pageindex*5,commentid:'6280346786642608295'}}).then((res)=>{
            if(res.status != 200){
                alert('请求失败');
                return
            }
            this.list=res.body.data.commentid
        })
    },
    getmore(){
        this.pageindex++
        this.getcommentlist(this.pageindex)
    },
    // postcomment(){
    //     var url = common.apidomain + '/api/postcomment/'+this.id;
    //     this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function(res){
             
    //     })
    // }
    postcomment() {
      if (this.postcontent.trim().length <= 0) {
        alert("请输入内容");
        return;
      } else {
        alert(this.postcontent);
        this.postcontent = "";
      }
    }
  }
};
</script>

<style scoped>
#postcomment {
  padding: 5px;
}
.p {
  height: 1px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
#list{
    padding:5px;
}
.title {
    padding:5px;
  color: #6d6d72;
  font-size: 16px;
  background-color: rgba(0,0,0,0.1);
}
</style>
