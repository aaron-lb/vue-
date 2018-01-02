<template>
	<div id="subtmpl">
		<div class="inleft div" @click="substrict">-</div>
		<div class="incenter div" v-text="count"></div>
		<div class="inright div"  @click="add">+</div>
	</div>
</template>

<script>
import {carvm} from '../../kits/carvm.js'
	export default{
        props:['initCount','goodsid'],
		data(){
			return {
                count:1 ,//代表购买商品的数量
                resObj:{goodsid:0,type:'add'}
			}
        },
        created(){
            this.count=this.initCount
            },
		methods:{
			substrict(){
				this.count--;
//				确保最小值为1
				
				this.sendmessage('substrict');
				if(this.count <1){
					this.count = 1;
					return
				}
				carvm.$emit('carvm',-1)
			},
			add(){
				this.count++;
				carvm.$emit('carvm',1)
				this.sendmessage('add');
			},
			sendmessage(type){
                this.resObj.type = type;
                this.resObj.goodsid = this.goodsid;
                var arr =  JSON.parse(localStorage.getItem('goodsdata') || '[]');
                if(type=='add'){
					
                    arr.push({goodsid:this.goodsid,count:1})
				}
				else if(type=='substrict' && this.initCount >1){
						for(var i=0;i<arr.length;i++){
                        if(arr[i].goodsid == this.goodsid){
                            if(arr[i].count >1){
                                arr[i].count--;
                                break
                            }
                            else {
                                arr.splice(i,1);
                                break
                            }
                        }
                    }
					
                }else{
					return
				}
                localStorage.setItem('goodsdata',JSON.stringify(arr))

				this.$emit('cardataobj',this.resObj)
				
			}
		}
	}

</script>

<style scoped>
	#subtmpl .div{
		width: 40px;
		height: 25px;
		line-height: 25px;
		border: 1px solid #000;
		display: inline-block;
		text-align: center;
	}

</style>