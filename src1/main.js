// 总入口
const app = require('./app')
require('./app/database')
const config = require('./app/config')

app.listen(config.APP_PORT, () => {
  console.log(`服务器在${config.APP_PORT}端口已启动`)
})
