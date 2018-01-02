<template>
    <!--购物车页面-->
    <div id="tmpl">

        <div class="row" v-for='(item,index) in datalist' :key='index'>
            <mt-switch v-model="value[index]"></mt-switch>
            <img :src="item.thumb_path" class="img" alt="商品图片">
            <div class="infoRight">
                <h4 v-text='item.title  '></h4>
                <ul>
                    <li>￥{{item.sell_price}}</li>
                    <li>
                        <carInputNumber :initCount='item.cou' :goodsid='item.id' v-on:cardataobj='getiInputNumber'></carInputNumber>
                    </li>
                    <li>
                        <a href="#" @click.prevent='delrow(item.id,index)'>删除</a>
                    </li>
                </ul>
            </div>
        </div>

        <div id='total'>
            <div id="desc">
                <ul>
                    <li>总计（不含运费）</li>
                    <li>已勾选商品{{count}}件，总价￥{{totalAmount}}元</li>
                </ul>
            </div>
            <div id="button">
                <mt-button type='danger' size='small'>去结算</mt-button>
            </div>
        </div>
    </div>

</template>


<script>
import { getgoodsObject,remoteItem} from "../../kits/localsg.js";
import carInputNumber from "../subcom/carInputNumber.vue";
import {carvm} from '../../kits/carvm.js'
export default {
  components: { carInputNumber: carInputNumber },
  data() {
    return {
      value: [],
      datalist: [],
      totalAmount: 0
    };
  },
  computed: {
    count() {
      var totalCount = 0;
      var amount = 0;
      this.value.forEach((item, index)=>{
        if (item) {
          totalCount += this.datalist[index].cou;
        
          var count = this.datalist[index].cou;
          var price = this.datalist[index].sell_price;
          var itemamount = count * price;
          amount += itemamount;
        }
      });
      this.totalAmount = amount;
      return totalCount;
    }
  },
  created() {
    var obj = getgoodsObject();
    var str = "";
    for (var k in obj) {
      str += k + ",";
    }
    str = str.substring(0, str.length - 1);
    var url = "http://vue.studyit.io/api/goods/getshopcarlist/" + str;
    this.$http.get(url).then(res => {
      if (res.body.status != 0) {
        console.log("请求失败");
      } else {
        res.body.message.forEach((item, index) => {
          item.cou = obj[item.id];

          this.value.push(false);
        });
        this.datalist = res.body.message;
      }
    });
  },
  methods: {
    getiInputNumber(resObj) {
      for (var i = 0; i < this.datalist.length; i++) {
        if (this.datalist[i].id == resObj.goodsid) {
          if (resObj.type == "add") {
            this.datalist[i].cou++;
          } else {
            this.datalist[i].cou--;
         
          }
          break;
        }
      }
    },
    delrow(id,index){
        remoteItem(id);
        carvm.$emit('removeCount',this.datalist[index].cou)
        this.value.splice(index,1)
        this.datalist.splice(index,1)
    }
  }
};
</script>


<style scoped>
.row {
  height: 102px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
}
.img {
  height: 75px;
  flex: 0 0 75px;
  margin-top: 12px;
}
.infoRight h4 {
  color: #0094ff;
  font-size: 14px;
  margin-top: 15px;
  margin-left: 8px;
}
.row ul {
  /* padding:10px; */
  padding-left: 5px;
}
.row li {
  list-style: none;
  display: inline-block;
}
.row li:first-child {
  color: red;
  margin-right: 5px;
}
.row li:last-child {
  margin-left: 5px;
}
#total {
  height: 100px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
}
#total ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
#total ul li:first-child {
  margin-bottom: 10px;
}
#total ul li:first-child {
  margin-top: 10px;
}
#desc {
  flex: 1;
  margin: 15px 0 0 0;
}
#button {
  flex: 0 0 80px;
  margin: 30px 0 0 0;
}
</style>
