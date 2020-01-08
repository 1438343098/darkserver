let time = null
time = setInterval(()=>{
	run_cmd('sh', ['./index.sh'], function(text){ console.log(text) });
},1000 * 60 * 2)
function run_cmd(cmd, args, callback) {
	console.log("执行了nodejs定时任务")
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";
  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}

