var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'conent':'很期待下一期！！！',
	'cid':348
})

var options={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	hearders:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'PHPSESSID=4b8tsh4o705remmsqc5asjh1a7; imooc_uuid=c6365dba-cffb-4184-b7ec-5b09fc9147e3; imooc_isnew=1; imooc_isnew_ct=1474769093; loginstate=1; apsid=RhYjU2OTEyZTNiOTliMGNjZGZmYjkyMzM3NDQ0ZWEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjUwNzMyNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4aWFveGllcl94eXlAMTYzLmNvbQAAAAAAAAAAAAAAAGQwYmNhZjUxZTg4YTM0MDZmNDRlN2E4NmI4MDhmNWE1hzLnV4cy51c%3DYj; last_login_username=xiaoxier_xyy%40163.com; cvde=57e730c548e2a-20; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1474769106; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1474769907; jwplayer.qualityLabel=è¶æ¸',
		'DNT':'1',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers;'+JSON.stringify(res.headers));

	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})

	res.on('end',function(){
		console.log('success!')
	})

	res.on('error',function(){
		console.log('error:'+e.message);
	})


})

	req.write(postData);

	req.end();
