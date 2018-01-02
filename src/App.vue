<!-- 以后项目的根组件 -->
<!-- template主要是放html元素的 -->
<template>

<div>
	<!-- mint-ui的固定顶部 -->
	<mt-header fixed title="vue商城"></mt-header>

<!-- 返回按钮 -->
	<div id="back" v-if='isshow'>
		<a href="#" @click.prevent='back' v-if='isshow'>返回</a>
	</div>

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
				<span class="mui-icon mui-icon-contact"><span class="mui-badge" id="badge">
					{{beginCount}}</span></span>
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
import {vm} from './kits/vm.js'
import {carvm} from './kits/carvm.js'
vm.$on('COUNTSTR',function(count){
	var badgeobj = document.querySelector('#badge');
	badgeobj.innerText = parseInt(badgeobj.innerText) + count;
})

carvm.$on('carvm',function(count){
	var badgeobj = document.querySelector('#badge');
	badgeobj.innerText = parseInt(badgeobj.innerText) + count;
})

carvm.$on('removeCount',function(count){
	var badgeobj = document.querySelector('#badge');
	badgeobj.innerText = parseInt(badgeobj.innerText) - count;
})

//负责导出.vue这个组件对象（它本质上是个Vue对象，所有Vue中该定义的元素都可以使用）
export default {
  data() {
    //等价于es5中的data:function(){}
    return {
			msg: "hello nihao66",
			isshow:false,
			beginCount:0
    };
  },
  methods: {
    tip: function() {
      Toast("提示信息");
		},
		back(){
			this.$router.go(-1)
		}
  },
  created() {
	  var arr = JSON.parse(localStorage.getItem('goodsdata') || '[]');
	  var count = 0;
	  for(var i=0;i<arr.length;i++){
		  count += arr[i].count
	  }
	  this.beginCount = count
	},
	watch:{
		"$route.path":function(newVal,oldVal){
			if(newVal == '/home'){
				this.isshow = false
			}else{
				this.isshow = true
			}
		}
	}
};
</script>



<style scoped>
/* 当前页面的css样式   scoped表示这个里面写的css代码只是在当前组件页面上生效 */
.red {
  color: red;
}
#back{
	width: 60px;
	position: fixed;
	top:10px;
	left: 10px;
	z-index:101;
}
#back a{
	color:white;
	font-size:16px;
	font-weight:bold;
}
</style>
