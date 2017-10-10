var http = require('http')
var url = require('url')

http.createServer(function(req, res) {
  var params = url.parse(req.url, true).query
  var input = params.number

  var numInput = new Number(input)
  var numOutput = new Number(Math.random() * numInput).toFixed(0)

  res.write(numOutput)
  res.end()
}).listen(80)