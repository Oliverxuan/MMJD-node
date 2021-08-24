const connection = require('../app/database')

class ImgService {
  async getImg() {
    const statement = `SELECT * FROM goodslist`
    const [result] = await connection.execute(statement)
    return result
  }
  async getPersonImg(type,isflag) {
    const statement = `SELECT * from goodslist WHERE type=? || isflag=? `
    const result  = await connection.execute(statement,[type,isflag])
    return result
  }
}

module.exports = new ImgService()
