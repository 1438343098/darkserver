var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'liu19971026' })
// 上面的 secret 保持和 GitHub 后台设置的一致
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
});


function run_cmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var resp = "";

  child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
  child.stdout.on('end', function() { callback (resp) });
}

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    run_cmd('sh', ['./index.sh',event.payload.repository.name], function(text){ console.log(text) });
})