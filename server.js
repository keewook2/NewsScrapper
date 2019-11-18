var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var exphbs = require("express-handlebars");
// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

var News = require("./newsModel.js");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
      defaultLayout: "main"
    })
  );
  app.set("view engine", "handlebars");
  

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);


app.get("/", function(req, res){

});


app.get("/scrape", function(req,res){
  // using axios to scrape the news
  axios.get("https://foxnews.com/world").then(function(response){
    var $ = cheerio.load(response.data);

    var results = [];
    $(".main-content").find("article").find(".info").each(function(i, element){
      var headline = $(element).find(".info-header").find("h2").find("a").text();
      var link = $(element).find(".info-header").find("h2").find("a").attr("href");
      // var link = $(element).parent().attr("href");
      var summary = $(element).find(".content").find(".dek").find("a").text();
      if (headline !== ''){
          results.push({
              headline: headline,
              link: link,
              summary: summary
          })
      }
      
    });
  })
})

app.get("/saved", function(req, res){
    
})

module.exports = app;

