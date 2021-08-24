const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
  let status, message

  switch (error.message) {
    case errorTypes.NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400 //Bad request
      message = '用户名或者密码为空'
      break
    case errorTypes.USER_ALREADY_EXISTS:
      status = 409 //Conflict
      message = '用户名已存在'
      break
    case errorTypes.USER_DOES_NOT_EXISTS:
      status = 400 //参数错误
      message = '用户名不存在'
      break
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400 //参数错误
      message = '用户密码错误!'
      break
    case errorTypes.PASSWORD_IS_INCORRENT:
      status = 400 //参数错误
      message = '用户密码错误!'
      break
    case errorTypes.UNAUTHORIZATION:
      status = 401 //参数错误
      message = 'TOKEN验证不通过'
      break
    default:
      status = 404
      message = 'NOT FOUND'
  }

  ctx.status = status
  ctx.body = message
}

module.exports = errorHandler
