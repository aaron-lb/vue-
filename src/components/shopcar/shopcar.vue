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
                    <li>购买数量组件</li>
                    <li><a href="#">删除</a></li>
                </ul>
            </div>
        </div>

    </div>

</template>


<script>
import {getgoodsObject} from '../../kits/localsg.js'

export default {
  data() {
    return {
      value: [],
      datalist: [
        // {
        //   cou: 1,
        //   id: 87,
        //   title: "华为（HUAWEI）荣耀6Plus 16G双4G版",
        //   sell_price: 2195,
        //   thumb_path:
        //     "http://vue.studyit.io/upload/201504/20/thumb_201504200046594439.jpg"
        // },
        // {
        //   cou: 1,
        //   id: 88,
        //   title: "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
        //   sell_price: 5780,
        //   thumb_path:
        //     "http://vue.studyit.io/upload/201504/20/thumb_201504200059022920.jpg"
        // }
      ]
    };
  },
  created(){
      var obj=getgoodsObject();
      var str=''
      for(var k in obj){
          str += k +','
      }
      str = str.substring(0,str.length-1)
      var url = 'http://vue.studyit.io/api/goods/getshopcarlist/'+str
      this.$http.get(url).then((res)=>{
          if(res.body.status!=0){
              console.log('请求失败')
          }
          else{
              this.datalist= res.body.message
          }
      })
  }
};
</script>


<style scoped>
.row {
  height: 102px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
}
.img{
    height: 75px;
    flex:0 0 75px;
    margin-top:12px;
}
.infoRight h4{
    color:#0094ff;
    font-size:14px;
    margin-top:15px;
}
.row ul{
    padding:10px;
}
.row li{
    list-style:none;
    display: inline-block
}
.row li:first-child{
    color:red;
    margin-right:10px;
}
.row li:last-child{
    margin-left:10px;
}
</style>
