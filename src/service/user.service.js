const connection = require('../app/database')

class UserService {
  async create(user) {
    const { name, password } = user
    const statement = 'INSERT INTO users (name,password) VALUES (?,?);'

    const result = await connection.execute(statement, [name, password])
    //将user存储到数据库中
    return result[0]
  }
  async getUserByNanme(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`

    const result = await connection.execute(statement, [name])

    return result[0]
  }

  async getNameById(userId) {
    const statement = `SELECT u.type,u.isflag,u.fix,u.createAt FROM users u WHERE id=?;`
    const result = await connection.execute(statement, [userId])
    return result[0][0]
  }
  async changeSkin(flag, type, fix,id) {
    const statement = `update users set isflag=?,type=?,fix=? where id =?`
    const result = await connection.execute(statement,[flag,type,fix,id])
    return result[0]
  }
  async getStore(id) {
    const statement = `SELECT * from goodslist WHERE id IN (SELECT s.goods_id FROM start s WHERE user_id=?)`
    const result = await connection.execute(statement, [id])
    return result
  }
  async changeStore(id, goodsId) {
    const statement = `INSERT INTO start (user_id,goods_id) VALUES(?,?)`
    const result = await connection.execute(statement, [id,goodsId])
    return result[0]
  }

}

module.exports = new UserService()
