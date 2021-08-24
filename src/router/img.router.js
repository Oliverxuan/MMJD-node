const Router = require('koa-router')

const imgRouter = new Router({ prefix: '/mmjd' })

const { getImgs,personType,personImgs } = require('../controller/img.controller')
const { verifyAuth } = require('../middleware/auth.middleware')

imgRouter.get('/', getImgs)
imgRouter.post('/personimg',verifyAuth,personType,personImgs)

module.exports = imgRouter
