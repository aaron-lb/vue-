import Vue from 'vue'//导入vue核心包
import vueRouter from 'vue-router' //导入vue—router包
import mintui from 'mint-ui'  //导入mint-ui
import vueResource from 'vue-resource'     //导入ajax请求包
import moment from 'moment'         //导入moment日期格式化插件
import VuePreview from 'vue-preview'      //图片预览插件




import App from './App.vue'//导入App.vue的vue对象
import shopcar from './components/shopcar/shopcar.vue'
import home from './components/home.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'



import 'mint-ui/lib/style.min.css'       //导入mint-ui的css样式，因为没有返回对象，所以这样导入
import '../statics/mui/css/mui.css'       //导入mui的css样式，因为mui的html这个项目是直接复制粘贴进来的，所以就不用引入mui了
import '../statics/css/site.css'


Vue.use(vueRouter) //将vueRouter对象绑定到Vue对象上
Vue.use(mintui)    //Vue对象使用一下mintui
Vue.use(vueResource)//将vue-resource对象绑定到vue
Vue.use(VuePreview) //图片预览插件




var router1=new vueRouter({    //定义路由规则
    linkActiveClass:'mui-active',//改变路由激活时的class名称
    routes:[
        {path:'/',component:home},
        {path:'/home',component:home},
        {path:'/shopcar',component:shopcar},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsinfo/:id',component:newsinfo},
        {path:'/photo/photolist',component:photolist},
        {path:'/photo/photoinfo/:id',component:photoinfo},
        {path:'/goods/goodslist',component:goodslist},
        {path:'/goods/goodsinfo/:id',component:goodsinfo},
        {path:'/goods/goodsdesc/:id',component:goodsdesc},
        {path:'/goods/goodscomment/:id',component:goodscomment},
    ]
})


//定义全局过滤器，格式化日期
Vue.filter('datefmt',function(data,str=''){
    // return moment(data).format(str)     这句话是使用引入的moment插件格式化时间
    var dt = new Date(data)     //这是自己写的格式化时间的过滤器，没用插件
    var y = dt.getFullYear()
    var m = (dt.getMonth()+1).toString().padStart(2,0)
    var d = dt.getDate().toString().padStart(2,0)
    var hh = dt.getHours().toString().padStart(2,0)
    var mm = dt.getMinutes().toString().padStart(2,0)
    var ss = dt.getSeconds().toString().padStart(2,0)
    if(str.toLowerCase() === 'yyyy-mm-dd hh:mm:ss'){
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    }else{
        return `${y}-${m}-${d}`
    }
})


new Vue({            //利用vue对象进行解析渲染
    el:'#app',
    router:router1,       //使用路由对象实例,和上面对应
    render:create=>create(App)  //等价于render:function(create){create(App)}
    
})

