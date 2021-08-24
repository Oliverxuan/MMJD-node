const Router = require('koa-router')

const momentRouter = new Router({ prefix: '/moment' })
const { create, detail, content } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

momentRouter.post('/', verifyAuth, create)
momentRouter.get('/:momentId', detail)
momentRouter.post('/content', content)

module.exports = momentRouter
