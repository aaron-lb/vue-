<template>

    <div id="tmpl">
        <!-- 轮播图组件 -->
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for='(item,index) in imgs' :key='index'>
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>

    </div>

</template>


<script>

export default {
  props:['imgs'],
  data: function() {
    return {
      
    };
  },
  created() {
    
  },
  methods: {

  }
};

</script>


<style scoped>
.mint-swipe-items-wrap {
  width: 100%;
  height: 200px;
}
.mint-swipe-items-wrap img {
  width: 100%;
  height: 100%;
  display: block;
}
.mint-swipe {
  height: 200px;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border-top: none;
    border-left: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border-right:none;
    border-bottom:none;
}

</style>