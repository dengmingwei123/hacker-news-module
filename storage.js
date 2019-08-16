var fs = require("fs");
var path = require("path");

module.exports={
    // 1.获取新闻数据方法封装
    getAllNews:function(callback){
        fs.readFile(path.join(__dirname,"data.json"),'utf8',function(err,newsStr){
            // 将读取的新闻字符串,转为数组
            var newsArr = JSON.parse(newsStr);
            // 将数据以回调函数的参数返回
            callback && callback(newsArr);
        })
    },
    
    // 2.根据ID获取新闻数据
    getNewsById:function(id,callback){
        // 获取全部新闻数据
        this.getAllNews(function(newsArr){
            // 根据ID获取
            var news=newsArr.find(function(v,i){
                return v.id == id;
            })
            // 将数据以回调函数的参数返回
            callback && callback(news);
        })
    },

    // 3.添加新闻数据
    addNews:function(news,callback){
        this.getAllNews(function(newsArr){
            // 新的数据添加id
            news.id = newsArr.length == 0 ? 1 : newsArr[newsArr.length-1].id + 1;
            // 将新闻添加到数组中
            newsArr.push(news);
            fs.writeFile(path.join(__dirname,"data.json"),JSON.stringify(newsArr),function(err){
                callback && callback();
            })
        })
    }
}