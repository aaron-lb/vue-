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
                    <li><carInputNumber :initCount='item.cou' :goodsid='item.id'
                        v-on:cardataobj='getiInputNumber'></carInputNumber></li>
                    <li><a href="#">删除</a></li>
                </ul>
            </div>
        </div>

    </div>

</template>


<script>
import {getgoodsObject} from '../../kits/localsg.js'
import carInputNumber from '../subcom/carInputNumber.vue'

export default {
  components:{carInputNumber:carInputNumber},
  data() {
    return {
      value: [],
      datalist: []
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
              res.body.message.forEach((item,index)=>{
                  item.cou = obj[item.id]
              })
              this.datalist= res.body.message
          }
      })
  },
  methods:{
      getiInputNumber(resObj){
          for(var i=0;i<this.datalist.length;i++){
              if(this.datalist[i].id == resObj.goodsid){
                  if(resObj.type=='add'){
                      this.datalist[i].cou++
                  }else{
                      this.datalist[i].cou--
                  }
                  break
              }
          }
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
.img{
    height: 75px;
    flex:0 0 75px;
    margin-top:12px;
}
.infoRight h4{
    color:#0094ff;
    font-size:14px;
    margin-top:15px;
    margin-left: 8px;
}
.row ul{
    /* padding:10px; */
    padding-left:5px;
}
.row li{
    list-style:none;
    display: inline-block
}
.row li:first-child{
    color:red;
    margin-right:5px;
}
.row li:last-child{
    margin-left:5px;
}
</style>
