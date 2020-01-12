const express = require('express');
const router = express.Router();
const exec = require('child_process').exec
let datas = {
	time:1,
	set:1
}
let time = null
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('gitcontrol', datas)
});

router.post('/startset', function(req, res, next) {
	datas = req.body
	if (datas.set == '1'){
		console.log('开启定时任务')
		time = setInterval(() => {
			run_cmd('bash', 'index.sh', function(text) {
				console.log(text)
			});
		}, 1000 * 60 * datas.time )
	}else{
		console.log('清除定时任务')
		clearInterval(time)
		time = null
	}
	// 毫秒 * 秒 * 分 
	res.render('gitcontrol', datas)
});

function run_cmd(cmd, instructions, callback) {
	console.log("执行了nodejs定时任务")
	const child = exec(cmd, {shell:instructions});
	const resp = "";
	child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
	child.stdout.on('end', function() { callback (resp) });
}


module.exports = router;
