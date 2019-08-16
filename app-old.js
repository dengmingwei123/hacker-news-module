// 引入express
var express = require("express");
// 引入path模块
var path = require("path");
// 引入读取存储模块
var storage = require("./storage");
// 引入body-parser
var bodyParser = require("body-parser");

// 创建express实例
var app = express();

app.use("/",bodyParser.urlencoded());
app.use("/",bodyParser.json());

// 配置模板引擎
app.engine("html",require("express-art-template"));

function index(req,res){
    storage.getAllNews(function(newsArr){
        res.render("index.html",{list:newsArr})
    })
}

// 首页
app.get("/",index);
app.get("/index",index);

// 详情页
app.get("/details",function(req,res){
    storage.getNewsById(req.query.id,function(news){
        res.render("details.html",{item:news})
    })
})

// 提交页
app.get("/submit",function(req,res){
    res.sendFile(path.join(__dirname,"views","submit.html"));
})

// 添加新闻
app.post("/add",function(req,res){
    storage.addNews(req.body,function(){
        // 重定向
        res.redirect("/index");
    })
})

app.get("/add",function(req,res){
    storage.addNews(req.query,function(){
        // 重定向
        res.redirect("/index");
    })
})

// 静态样式
app.use("/resources",express.static("resources"));

// 监听指定端口
app.listen(8888,function(){
    console.log("http://localhost:8888");
})
