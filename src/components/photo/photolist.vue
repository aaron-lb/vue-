<template>
    <!--图片分享页面-->
    <div id='tmpl'>
        <div id='cate'>
            <ul>
                <li>全部</li>
                <li v-for='item in list' :key='item.id' v-text='item.title' @click='getcurrent()'></li>
            </ul>
        </div>

        <!--mint-ui的lazy load组件实现懒加载-->
        <div id='imglist'>
            <ul>
                <li v-for="item in list" :key='item.id'>
                    <router-link v-bind='{to:"/photo/photoinfo/"+item.id}'>
                        <img v-lazy="item.images.large">
                    </router-link>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
import common from "../../kits/common.js";
export default {
  data() {
    return {
      list: [],
      count:''
    };
  },
  created() {
    this.getcates();
  },
  methods: {
    getcurrent() {
      this.count++
      var url = common.apidomain + "/v2/movie/coming_soon";
      this.$http.jsonp(url, { params: { start: this.count*8, count: 8 }}).then(res => {
        if (res.status != 200) {
          alert("请求失败");
          return;
        }
        this.list=res.body.subjects
      });
    },
    getcates() {
      var url = common.apidomain + "/v2/movie/in_theaters";
      this.$http.jsonp(url, { params: { start: 0, count: 10 } }).then(res => {
        if (res.status != 200) {
          alert("请求失败");
          return;
        }
        this.list = res.body.subjects;
      });
    }
  }
};
</script>

<style scoped>
#cate {
  width: 375px;
  max-width: 375px;
  overflow-x: auto;
}
#cate ul {
  width: 1000px;
  margin: 0 0 20px 0;
  padding-left: 10px;
}
#cate li {
    cursor: pointer;
  list-style: none;
  color: #0094ff;
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;
}

image[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
#imglist ul {
  padding-left: 0;
}
#imglist li {
  list-style: none;
}
#imglist li img {
  width: 100%;
  height: 300px;
}
</style>