// 路由相关的js 注册接口适用

const Router = require('koa-router')
const { create,getNameById,skin,getStore,changeStore } = require('../controller/user.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.post('/name',verifyAuth, getNameById)
userRouter.post('/skintest', verifyAuth, skin)
userRouter.post('/store', verifyAuth, getStore)
userRouter.post('/changestore',verifyAuth, changeStore)

module.exports = userRouter
