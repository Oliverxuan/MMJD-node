const Router = require('koa-router')

const imgRouter = new Router({ prefix: '/mmjd' })

const { getImgs } = require('../controller/img.controller')

imgRouter.get('/', getImgs)

module.exports = imgRouter
