const express=require("express");
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
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
app.get("/login/:email/:password",(req,res)=>{
    let email=req.params.email;
    let pwd=req.params.password;
    res.send("Login "+email+" "+pwd);
})
app.get("/form",(req,res)=>{
    res.sendFile(__dirname+"/htmlpages/home.html");
    console.log(__dirname)
})
app.post("/register",(req,res)=>{
    let fullname=req.body.fullname;
    res.send(fullname);
})