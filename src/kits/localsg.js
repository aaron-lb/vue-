// 负责操作localStorage的帮助文件
/*
*  获取数据：var Str  =localStorage.getItem(key);
*  添加和追加数据： localStorage.setItem(key,value) ,value 是一个字符串
*  移除数据 ： localStorage.removeItem(key);
* */

// 1.0 定义常量key,将来操作的localStorage中的数据都以这个key来作为标识
export const KEY = 'goodsdata';
export var valueObj = {goodsid:0,count:0};

// 2.0 实现数据的增加
// value;格式： {goodsid:87,count:10}
export function setItem(value){
    //1.0 获取json格式
    var jsonString =  localStorage.getItem(KEY);
    jsonString = jsonString || '[]';
    var arr =   JSON.parse(jsonString);
    // 2.0 将value追加进入arr
    arr.push(value);
    // 3.0 将arr 转换成json字符串保存起来
    localStorage.setItem(KEY,JSON.stringify(arr));
}

// 3.0 获取数据
export function getItem(){
   var jsonString =  localStorage.getItem(KEY);
//    将json格式字符串转换成 js对象
    // jsonString：是一个标准的json格式
    jsonString = jsonString || '[]';

    return JSON.parse(jsonString);
}

// 4.0 移除数据
export function remoteItem(){

}


// 将arr数组中的goodid相同的多个对象合并成同一个对象
/* arr的格式：
* [{goodsid:87,count:1},{goodsid:87,count:3},{goodsid:88,count:1}]
* */
export function getgoodsObject(){
    var arr = getItem()
    var resObj = {}

    for(var i=0;i<arr.length;i++){
        var item = arr[i]
        if(!resObj[item.goodsid]){
            resObj[item.goodsid] = item.count
        }else{
            var count = resObj[item.goodsid]
            resObj[item.goodsid] = count + item.count
        }
    }
    return resObj
}