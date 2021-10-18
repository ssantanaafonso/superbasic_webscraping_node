const axios = require("axios");
const cheerio = require("cheerio");
const rawHtml = axios.get('https://news.ycombinator.com/jobs');
rawHtml.then(
    res => {
        const $ = cheerio.load(res.data);
        let text = [];
        $('.titlelink').each(function (){

            text.push($( this ).text());
        });
        console.log(text);
    }
)

