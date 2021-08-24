const imgService = require('../service/img.service');
const { getNameById } = require('../service/user.service');


class ImgController {
  async getImgs(ctx, next) {

    const result = await imgService.getImg()
    console.log("imgs");
    ctx.body = result
  }

  async personType(ctx, next) {
    const { id } = ctx.user
    const {type,isflag} = await getNameById(id)
    ctx.imgtype = { type: type, isflag: isflag }
    await next();
  }

  async personImgs(ctx, next) {
    const { type, isflag } = ctx.imgtype
    const result = await imgService.getPersonImg(type, isflag)
    ctx.body = result[0]
  }
}
module.exports = new ImgController()
