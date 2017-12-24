<!-- 以后项目的根组件 -->
<!-- template主要是放html元素的 -->
<template>

<div>
	<!-- mint-ui的固定顶部 -->
	<mt-header fixed title="vue商城"></mt-header>


	<!--  路由占位符 -->
  <router-view></router-view>     


	<!-- mui的底部导航栏 -->
	<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/huiyuan">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/newsinfo">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
	</nav>
</div>


</template>



<script>
import { Toast } from "mint-ui"; //导入mint-ui里的js组件

//负责导出.vue这个组件对象（它本质上是个Vue对象，所有Vue中该定义的元素都可以使用）
export default {
  data() {
    //等价于es5中的data:function(){}
    return {
      msg: "hello nihao66"
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
