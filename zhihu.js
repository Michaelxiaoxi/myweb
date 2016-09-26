// 抓取知乎收藏夹的问题列表
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.zhihu.com/collection/69154204';

function fliterhtml(html){
    var $ = cheerio.load(html);
    var stars = $('.zm-item');
    var anws =[];
    stars.each(function(item){
        var star = $(this);
        var stitle = star.find('.zm-item-title').text();
        var anw =star.find('.zh-summary').text();
        var stitleData = {
            stitle : stitle,
            ans :anw
        }

        anws.push(stitleData);
    })
    return anws;
}

function printanwsinfo(anws){
    console.log(anws.length);
    var i=1;
    anws.forEach(function(item){
        var stitle = item.stitle;
        console.log(i+' -- '+stitle +'\n');
        i++
    })
}
http.get(url,function(res){
    var html = '';
    res.on('data',function(data){
        html += data;
    })
    res.on('end',function(){
       var anws =  fliterhtml(html);
        printanwsinfo(anws);
    })
}).on('error',function(){
    console.log('error!!!')
})
