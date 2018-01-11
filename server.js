var express = require("express");
var app = express();
var bodyParser = require("body-parser");




app.use(bodyParser.urlencoded({extended: true}));
app.set("views",__dirname+"/templates");
app.set("view engine","pug");


app.get("/",function(req,res){
    res.sendFile(__dirname+"/public_html/index.html");
});

app.get("/code",function(req,res){
    res.render("code",{
        
    });
});


app.get("/case",function(req,res){
    res.sendFile(__dirname+"/public_html/form.html");
    res.on("end",function(){
        console.log("response end");
    });
});

app.post("/case",function(req,res){
    res.render("case",{
        nama : req.body.nama
    });
});


app.listen(9600,function(){
    console.log("listening on port 9600");
});