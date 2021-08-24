const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
const { getUserByNanme } = require('../service/user.service')

class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: 'RS256',
    })

    ctx.body = { id, name, token }
  }

  async success(ctx, next) {
    console.log('success')
  }
}

module.exports = new AuthController()
