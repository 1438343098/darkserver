var express = require('express');
var router = express.Router();
var https = require("https")
/* GET home page. */

router.get('/', function(req, res, next) {
	console.log(req.query,'aa55a')
	if (req.query["text"] && req.query.text) {
		var urls = "https://api.bilibili.com/x/web-interface/search/type?search_type=photo&highlight=1&keyword=" + encodeURI(req.query.text)+'&page='+ req.query.page
	} else {
		var urls ="https://api.bilibili.com/x/web-interface/search/type?search_type=photo&highlight=1&keyword=%E5%9B%BE%E7%89%87&page="+ req.query.page
	}
	let datas = ""
	https.get(urls, function(okdata) {
		okdata.setEncoding("utf8")
		okdata.on("data", chunk => datas += chunk)
		okdata.on("end", () => res.end(datas))
	})
});
router.get('/listInfo', function(req, res, next) {
	console.log(req.query.doc_id)
	var urls = "https://api.vc.bilibili.com/link_draw/v1/doc/detail?doc_id=" + req.query.doc_id
	let datas = ""
	https.get(urls, function(okdata) {
		okdata.setEncoding("utf8")
		okdata.on("data", chunk => datas += chunk)
		okdata.on("end", () => res.end(datas))
	})
});

module.exports = router;
