var axios = require('axios');
var cheerio = require("cheerio");

function test(){
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
      console.log(results);

    });
  }
  test();