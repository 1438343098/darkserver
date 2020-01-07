var http = require('http')
var createHandler = require('node-github-webhook')
var handler = createHandler({ path: '/push', secret: 'liu19971026' }) // 单个仓库

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(6606)

handler.on('error', function (err) {
  console.error('Error:', err.message)
})

handler.on('push', function (event) {
  console.log(
    'Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref,
	event.path
  )
})