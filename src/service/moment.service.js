const connection = require('../app/database')

class MomentService {
  async create(userId, content, goodsId) {
    const statement = `INSERT INTO moment (content,user_id,goods_id) VALUES (?,?,?);`
    const [result] = await connection.execute(statement, [
      content,
      userId,
      goodsId,
    ])
    return result
  }

  async getMomentById(id) {
    const statement = `SELECT m.content,m.createAt,g.img,g.name FROM moment m LEFT JOIN goodslist g ON(m.goods_id=g.id) WHERE user_id=?`
    const [result] = await connection.execute(statement, [id])
    return result
  }
  async getMomentByGoodsId(goodsId) {
    const statement = `SELECT m.content,m.user_id,m.createAt,u.name FROM moment m LEFT JOIN users u ON (m.user_id = u.id) WHERE goods_id=?`
    const [result] = await connection.execute(statement, [goodsId])
    return result
  }
}

module.exports = new MomentService()
