<template>

  <div id='tmpl'>
    <!-- 轮播 -->
    <div class="slider">
      <silder :imgs='imgs'></silder>
    </div>

    <!--2.0 实现商品购买区-->
    <div id="buy">
      <h4 v-text='info.title'></h4>
      <p class="line"></p>
      <ul>
        <li class="price">
          市场价:
          <s>￥{{info.market_price}}</s> 销售价：
          <span>￥{{info.sell_price}}</span>
        </li>
        <li class="inputli">
          购买数量：
          <inputnumber v-on:dataobj="getcount" class="inputnumber"></inputnumber>
          <!-- 动画小球 -->
          <transition @before-enter='beforeEnter' @enter="enter" @after-enter='afterEnter'>
            <div v-if="isshow" class="ball"></div>
          </transition>
            
        </li>
        <li>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click='toshopcar'>加入购物车</mt-button>
        </li>
      </ul>
    </div>

    <div id="params">
      <h6>商品参数</h6>
      <p class="line"></p>
      <ul>
        <li>商品货号：{{info.goods_no}}</li>
        <li>库存情况：{{info.stock_quantity}}</li>
        <li>上架时间：{{info.add_time}}</li>
      </ul>
    </div>

    <!--3.0 图文详情-->
    <!--4.0 商品评论-->
    <div id="other">
      <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
        <mt-button class="imgdesc" type="primary" size="large">图文详情</mt-button>
      </router-link>
      <router-link v-bind="{to:'/goods/goodscomment/'+id}">
        <mt-button type="danger" size="large">商品评论</mt-button>
      </router-link>
    </div>

  </div>

</template>

<script>
import silder from "../subcom/silder.vue";
import inputnumber from "../subcom/inputnumber.vue";
import { vm } from "../../kits/vm.js";
import { setItem, valueObj } from "../../kits/localSg.js";
export default {
  components: {
    silder: silder,
    inputnumber: inputnumber
  },
  data() {
    return {
      isshow:false,
      id: "",
      imgs: [],
      info: {},
      inputNumberCount: 1
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getImg(this.id);
    this.getInfo(this.id);
  },
  methods: {
    //实现小球动画
    beforeEnter(el){
      el.style.transform='translate(0,0)'
    },
    enter(el,done){
      el.offsetWidth;
      el.style.transform='translate(80px,366px)';
      el.style.transition='all 1s ease';
      done()
    },
    afterEnter(el){
      this.isshwo=!this.isshow
    },

    toshopcar() {
      vm.$emit("COUNTSTR", this.inputNumberCount);
      //2.0 将数据保存到localStroage中
      valueObj.goodsid = this.id;
      valueObj.count = this.inputNumberCount;
      setItem(valueObj);

      //3.0 实现小球动画
      this.isshow = !this.isshow;
    },

    getImg(id) {
      var url = "http://vue.studyit.io/api/getthumimages/" + id;
      this.$http.get(url).then(res => {
        if (res.body.status != 0) {
          alert("请求失败");
          return;
        }
        this.imgs = res.body.message;
      });
    },

    getInfo(id) {
      var url = "http://vue.studyit.io/api/goods/getinfo/" + id;
      this.$http.get(url).then(res => {
        if (res.body.status != 0) {
          alert("请求失败");
          return;
        }
        this.info = res.body.message[0];
      });
    },

    getcount(count) {
      this.inputNumberCount = count;
    }
  }
};
</script>

<style scoped>
.silder {
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 5px;
}

#buy,
#params,
#other {
  margin: 5px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
.line {
  height: 1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
#buy ul,
#params ul {
  padding-left: 0px;
}
#buy h4 {
  color: #0094ff;
  padding: 5px;
}
#buy li,
#params li {
  list-style: none;
  padding: 8px;
}

#buy .price span {
  color: red;
}

#other .imgdesc {
  margin-bottom: 20px;
}
.inputli {
  position: relative;
}
.inputnumber {
  position: absolute;
  left: 100px;
  top: 5px;
}
.ball {
  background-color: red;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: absolute;
  left: 150px;
  top: 10px;
  z-index: 100;
}
</style>