<!-- 以后项目的根组件 -->
<!-- template主要是放html元素的 -->
<template>

<div>

  <span v-text="msg" class='red'></span>

  <router-link to='/login'>登录</router-link>
  <router-link to='/register'>注册</router-link>

  <router-view></router-view>     <!--  路由占位符 -->

  <mt-button @click="tip" type="danger" size="large">danger</mt-button> <!--使用一下mint-ui-->

  <!-- 使用mui九宫格 -->
  <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		        </ul> 
		</div>


    <!-- 使用mui中的图文列表 -->
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							幸福
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							木屋
							<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="">
						<div class="mui-media-body">
							CBD
							<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
						</div>
					</a>
				</li>

			</ul>

</div>


</template>



<script>
import { Toast } from "mint-ui"; //导入mint-ui里的js组件

//负责导出.vue这个组件对象（它本质上是个Vue对象，所有Vue中该定义的元素都可以使用）
export default {
  data() {
    //等价于es5中的data:function(){}
    return {
      msg: "hello nihao  1116666"
    };
  },
  methods: {
    tip: function() {
      Toast("提示信息");
    }
  },
  created() {}
};
</script>



<style scoped>
/* 当前页面的css样式   scoped表示这个里面写的css代码只是在当前组件页面上生效 */
.red {
  color: red;
}
</style>
