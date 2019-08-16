var storage = require("./storage");
var path = require("path");
module.exports={
    indexHandler:function (req,res){
        storage.getAllNews(function(newsArr){
            res.render("index.html",{
                list:newsArr
            })
        })
    },
    detailsHandler:function(req,res){
        storage.getNewsById(req.query.id,function(news){
            res.render("details.html",{item:news})
        })
    },
    submitHandler:function(req,res){
        res.sendFile(path.join(__dirname,"views","submit.html"));
    },
    getAddNewsHandler:function(req,res){
        storage.addNews(req.query,function(){
            // 重定向
            res.redirect("/index");
        })
    },
    postAddNewsHandler:function(req,res){
        storage.addNews(req.body,function(){
            // 重定向
            res.redirect("/index");
        })
    }
}