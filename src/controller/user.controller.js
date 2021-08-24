const service = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    //获取用户请求的参数
    const user = ctx.request.body

    //查询数据
    const result = await service.create(user)

    //返回数据
    ctx.body = result
  }

  async getNameById(ctx, next) {
    const { id,name } = ctx.user
    const {type,isflag,fix,createAt} = await service.getNameById(id)
    const result={id:id,name:name,createAt:createAt,type:type,isflag:isflag,fix:fix}
    ctx.body= result
  }
  async skin(ctx, next) {
    const { flag, type, fix } = ctx.request.body
    const { id } = ctx.user
    const result = await service.changeSkin(flag, type, fix,id)
    ctx.body=result
  }

  async getStore(ctx,next) {
    const { id } = ctx.user
    const result = await service.getStore(id)
    ctx.body = result[0]
  }

  async changeStore(ctx,next) {
    const { id } = ctx.user
    console.log(id);
    const { goodsId } = ctx.request.body
    console.log(goodsId);
    const result = await service.changeStore(id, goodsId)
    ctx.body = result
  }


}

module.exports = new UserController()
