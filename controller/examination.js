const {exec} = require('../db/mysql')

const getList = (param) => {
  let {pageNum, pageSize} = param
  pageNum = pageNum<1? 1: pageNum
  pageSize= pageSize<1?1: pageSize
  const sql = `
    select * from full_mark limit ${pageSize * (pageNum - 1)} , ${pageSize};
  `
  const sql2 = `select count(*) from full_mark;`
  return Promise.all([exec(sql),exec(sql2)])
  .then((res) => {
    return res
  })
  .catch(e => {
    throw new Error(e)
  }) 
}
const fullmarkdetail = (postData) => {
  let {title, create_time,content, source_url} = postData
  const sql = `
    insert into full_mark_details (title, create_time,content,  source_url) values ('${title}', '${create_time}','${content}', '${source_url}');
  `
  // console.log(sql)

  return exec(sql).then((res) => {
    return {
      id: res.insertId
    }
  }).catch(e => {
    throw new Error(e)
  }) 
}
module.exports = {
  getList,
  fullmarkdetail
}