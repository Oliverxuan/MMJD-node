const express = require('express')

const app = express()

// common 中间件
//app.get('/', (req, res, next) => {
//   res.end('Hello!')
// })

// app.use((req, res, next) => {
//   console.log('可以被任意请求执行')
//   next()
// })
// app.use((req, res, next) => {
//   console.log('可以被任意请求执行2')
//   next()
// })
// app.use((req, res, next) => {
//   console.log('可以被任意请求执行3')
//   next()
// })

// app.get('/name', (req, res, next) => {
//   res.end('YZX')
// })

//路径中间件
//永远先执行先匹配的中间件
// app.use('/name', (req, res, next) => {
//   console.log('已经启动name')

//   next()
// })
// app.use('/name', (req, res, next) => {
//   console.log('已经启动name2')
//   res.end('name')
// })

//路径方法中间件
// app.get('/home', (req, res, next) => {
//   console.log('home path and method middleware')
// })

//连续注册中间件
// app.get(
//   '/home',
//   (req, res, next) => {
//     console.log('1')
//     next()
//   },
//   (req, res, next) => {
//     console.log('2')
//     next()
//   },
//   (req, res, next) => {
//     console.log('3')
//     next()
//   },
//   (req, res, next) => {
//     console.log('4')
//     next()
//   },
//   (req, res, next) => {
//     console.log('5')
//     res.end('home')
//     next()
//   }
// )

app.listen(3000, () => {
  console.log('服务器启动成功')
})
