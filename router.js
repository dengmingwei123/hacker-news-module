// 引入handler模块
var handler = require("./handler");
// 引入express框架
var express = require("express");
// 引入router对象,用来注册路由规则
var router = express.Router();

    // 首页
    router.get("/", handler.indexHandler);
    router.get("/index", handler.indexHandler);

    // 详情页
    router.get("/details", handler.detailsHandler)

    // 提交页
    router.get("/submit", handler.submitHandler)

    // 添加新闻
    router.post("/add", handler.postAddNewsHandler)

    router.get("/add", handler.getAddNewsHandler)

    // 静态样式
    router.use("/resources", express.static("resources"));

module.exports=router;