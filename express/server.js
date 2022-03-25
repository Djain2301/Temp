const express=require("express");
const app=express();
app.get("/",(request,response)=>{
    response.send("<h2>Welcome to Express Demo</h2>");
})

app.listen(3000,(e)=>{
    console.log("Server started");
});

app.get("/home",(req,res)=>{

    let fullname=req.query.fullname;
    res.send("<b>Home Page </b>"+ fullname);
})
//localhost:3000/home?fullname=test&age=37     -->caled as query parameters

app.get("/login/:email/:password",(req,res)=>{
    let email=req.params.email;
    let pwd=req.params.password;
    res.send("Login "+email+" "+pwd);
})
//localhost:3000/home/m@m.com/pwd

app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/htmlpages/home.html");
    console.log(__dirname)
})
//__dirname--->current directory tak ka path aa jayega

app.post("/register",(req,res)=>{
    let fullname=req.body.fullname;
    response.send(fullname);
})
//kisi html form me action me post diya ho or vahan se uthana ho toh use this