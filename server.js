const http = require("http");
const fs=require("fs");
const myserver=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-type':"text/html"}); 
    var myurl=request.url;
    if(myurl==="/home"){
        const content=fs.readFileSync("./htmlpages/home.html");
        response.write(content);
    }
    else if(myurl==="/register"){
        response.write("Registration Done");
    }
    else{
        response.write("<h2>Server Worked</h2> <p>"+ myurl +"</p>");
    }
    response.end();
})
myserver.listen(3000);
myserver.on("connection", (result)=>{  
    console.log("connection Established");
})