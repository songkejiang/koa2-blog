const mysql = require('mysql')
const {mysql_conf} = require('../conf/db')
const con = mysql.createConnection(mysql_conf)
con.connect()
function exec (sql) {
  return new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err)
        return 
      }
      resolve(result)
    })
  })
}
module.exports = {
  exec,
  escape: mysql.escape
}