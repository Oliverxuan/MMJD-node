const momentService = require('../service/moment.service')

class MomentController {
  async create(ctx, next) {
    //获取数据(user,id)
    const userId = ctx.user.id
    const content = ctx.request.body.content
    console.log(userId, content)

    //2.将数据插入到数据库中
    const result = await momentService.create(userId, content)
    ctx.body = result
  }

  async detail(ctx, next) {
    //拿到momentId
    const momentId = ctx.params.momentId

    //根据id查询动态
    const result = await momentService.getMomentById(momentId)
    console.log(result)
    ctx.body = result
  }
}

module.exports = new MomentController()
