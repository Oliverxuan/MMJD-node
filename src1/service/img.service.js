const connection = require('../app/database')

class ImgService {
  async getImg() {
    const statement = `SELECT * FROM goodslist`
    const [result] = await connection.execute(statement)
    return result
  }
}

module.exports = new ImgService()
