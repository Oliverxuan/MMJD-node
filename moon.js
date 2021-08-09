var express = require('express')
var app = express()

app.use(express.static('./public')) //开放静态资源, 恩，一步解决

app.listen(3000, function () {
  console.log('run server__')
})
