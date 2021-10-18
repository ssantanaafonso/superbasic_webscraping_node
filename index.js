const axios = require("axios");
const cheerio = require("cheerio");
let rawHtml = getPage('https://news.ycombinator.com/jobs');
let text = [];
let textFiltered = [];
async function iterateOverMyBody(){
    let res;
    for (let i = 0; i < 5; i++) {
        res = await rawHtml;
        rawHtml = getPage(extractInfo(res.data));
        

    }

    return text;
}


function getPage(page){
    return axios.get(page);
}

function extractInfo(data){
    const $ = cheerio.load(data);
    $('.titlelink').each(function (){
        text.push($( this ).text());
    });
    return `https://news.ycombinator.com/${$('.morelink').attr('href')}`;
}

iterateOverMyBody().then( text => {
    console.log(text)
    textFiltered = text.filter(el => el.toLowerCase().includes('front end'));
    console.log(textFiltered);
    console.log("ponme un reto");
});