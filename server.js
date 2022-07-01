/*
const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200,{'Content-Type':'text/html'})
  fs.readFile('index.html',function(error,data){
    if(error){
      res.writeHead(404)
      res.write('ERROR: file not found')
    }else{
      res.write(data)
    }
    res.end()
  })
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("listening on port " + port);
  }
});
const fs = require("fs");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const port = 3000;

app.use("/", router);
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("ERROR: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

router.post("/save", (req, res) => {
  console.log(req.body)
  console.log(req.header)
  //res.write("File Saved")
  //fs.writeFileSync('sample.txt','THEHEHEHEH TEXT')
  console.log("saved");
  res.end();
});

app.listen(port, () => console.log("listening on port: " + port));
*/
const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine","ejs")

app.get("/",(req,res)=>{
  const data=fs.readFileSync("./sample.txt")
  res.render("index", { "text":data})
})
app.listen(3000)
console.log("listening on port: 3000")
