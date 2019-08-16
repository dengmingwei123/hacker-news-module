// 引入express
var express = require("express");
var router = require("./router");


var bodyParser = require("body-parser");


// 创建express实例
var app = express();
// 配置模板引擎
app.engine("html",require("express-art-template"));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(router);


// 静态样式
app.use("/resources",express.static("resources"));

// 监听指定端口
app.listen(8080,function(){
    console.log("http://localhost:8080");
})
