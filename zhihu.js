// 抓取知乎收藏夹的问题列表
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.zhihu.com/collection/69154204';
var totalpage = 6;
var page = 1;
var i = 1;

function fliterhtml(html){
    var $ = cheerio.load(html);
    var stars = $('.zm-item');
    var anws =[];
    stars.each(function(item){
        var star = $(this);
        var stitle = star.find('.zm-item-title').text();
        var anw =star.find('.zh-summary').text();
        var zan = star.find('.zm-item-vote').text();
        var stitleData = {
            stitle : stitle,
            ans :anw,
            zan:zan
        }
        anws.push(stitleData);
    })
    return anws;
}

function printanwsinfo(anws){
    console.log(">>>第"+page+"页")
    anws.forEach(function(item){
        var stitle = item.stitle;
        var zan = item.zan;
        console.log(i+'. '+stitle );
        i++
    })
    page++;
    if(page<=totalpage){
        url = "http://www.zhihu.com/collection/69154204?page="+page;
        again();
    }else {
        console.log("\n抓取完毕！")
    }
}

function again() {
    http.get(url, function (res) {
        var html = '';
        res.on('data', function (data) {
            html += data;
        })
        res.on('end', function () {
            var anws = fliterhtml(html);
            printanwsinfo(anws);
        })
    }).on('error', function () {
        console.log('error!!!')
    })
}
again();
