var express = require('express');
var router = express.Router();
var https = require("https")
/* GET home page. */

// 图片
router.get('/', function(req, res, next) {
	var urls = "https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=2&mkt=zh-CN"
	let datas = ""
	 res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
	https.get(urls, function(okdata) {
		okdata.setEncoding("utf8")
		okdata.on("data", chunk => datas += chunk)
		okdata.on("end", () => res.end(datas))
	})
});
module.exports = router;