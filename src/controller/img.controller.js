const imgService = require('../service/img.service')

class ImgController {
  async getImgs(ctx, next) {
    console.log('1')
    const result = await imgService.getImg()
    console.log(result)
    ctx.body = result
  }
}
module.exports = new ImgController()
