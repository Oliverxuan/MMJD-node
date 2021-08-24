const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })
const { create, detail, content } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

// 发表评论
momentRouter.post('/', verifyAuth, create)
//查询个人评论
momentRouter.post('/personmoment',verifyAuth,detail)
//查询商品评论
momentRouter.post('/content', content)

module.exports = momentRouter
