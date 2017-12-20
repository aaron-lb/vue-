import Vue from 'vue';//导入vue核心包
import App from './App.vue';//导入App.vue的vue对象
import vueRouter from 'vue-router' //导入vue—router包
import mintui from 'mint-ui'  //导入mint-ui
import 'mint-ui/lib/style.min.css'       //导入mint-ui的css样式，因为没有返回对象，所以这样导入
import '../statics/mui/css/mui.css'       //导入mui的css样式，因为mui的html这个项目是直接复制粘贴进来的，所以就不用引入mui了
import login from './components/login.vue';  //导入路由规则对应的组件对象
import register from './components/register.vue';

Vue.use(vueRouter) //将vueRouter对象绑定到Vue对象上
Vue.use(mintui)    //Vue对象使用一下mintui



var router1=new vueRouter({    //定义路由规则
    routes:[
        {
            path:'/login',
            component:login
        },
        {
            path:'/register',
            component:register
        }
    ]
})

new Vue({            //利用vue对象进行解析渲染
    el:'#app',
    router:router1,       //使用路由对象实例,和上面对应
    render:create=>create(App)  //等价于render:function(create){create(App)}
    
})

