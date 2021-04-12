const express = require("express");
const app = express();
const morgan = require("morgan");
const connectdb=require("./connection/config");
const favicon = require('serve-favicon');
const hbs = require("express-handlebars");
require("dotenv").config();
// connectdb()
let path =require("path");

//allow all origin
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, key, Content-Type, Accept, access-control-allow-origin, Authorization, userid");
    next();
  }); 



// morgan & bodyparser
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.engine('hbs', hbs({extname: "hbs", defaultLayout: "main", layoutsDir: __dirname+"/views/layouts" }));
app.set('view engine', 'hbs')
app.use(express.static('public'));



app.get("/",(req,res,next)=>{
    res.render('comingsoon');
})



// Serve Favicon
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))



// Handle Errors
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      error: {
        message: error.message
      }
    });
  });

const port = process.env.PORT||6500;
app.listen(port,()=>console.log(`server connected at ${port}`))