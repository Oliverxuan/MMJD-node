const { json } = require('body-parser')
const express = require('express')
const mysql = require('mysql2')

const app = express()

app.all('/*', function (req, res, next) {
  // 跨域处理
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next() // 执行下一个路由
})

const connections = mysql.createPool({
  host: '121.5.114.161',
  user: 'goods',
  password: 'yzxyzx11',
  port: '3306',
  database: 'goods',
})
connections.getConnection((err, conn) => {
  conn.connect((err) => {
    if (err) {
      console.log('数据库连接失败!')
    } else {
      console.log('数据库连接成功!')
    }
  })
})
app.get('/mmjd', (req, res, next) => {
  const statement = `SELECT * FROM goodslist`

  connections.query(statement, (err, rows) => {
    res.send(rows)
    console.log(rows)
  })
})

app.listen(3000, () => {
  console.log('3000 端口下服务器已启动！')
})
