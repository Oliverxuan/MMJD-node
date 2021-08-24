const momentService = require('../service/moment.service')

class MomentController {
  async create(ctx, next) {
    //获取数据(user,id)
    const userId = ctx.user.id
    const content = ctx.request.body.content
    const goodsId = ctx.request.body.goodsId
    console.log(userId, content, goodsId)

    //2.将数据插入到数据库中
    const result = await momentService.create(userId, content, goodsId)
    ctx.body = result
  }

  async detail(ctx, next) {
    const {id}=ctx.user
    const result = await momentService.getMomentById(id)
    console.log(result)
    ctx.body = result
  }

  async content(ctx, next) {
    const { goodsId } = ctx.request.body
    const result = await momentService.getMomentByGoodsId(goodsId)
    console.log(result)
    ctx.body = result
  }
}

module.exports = new MomentController()
