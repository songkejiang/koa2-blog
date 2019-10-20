const router = require('koa-router')()
const {
  SuccessModel,
  ErrorModel
} = require('../../model')
const {
    getList
}  = require('../../controller/examination')
router.prefix('/api/examination')

router.get('/list', async (ctx, next) => {
  let {
    pageNum,
    pageSize
  } = ctx.query
  if (!pageNum || !pageSize) {
    ctx.body =  new ErrorModel('缺少分页参数')
    return
  }
  try{
    let data = await getList({
      pageNum,
      pageSize
    })
    console.log(data[1][0]['count(*)'])
    ctx.body = new SuccessModel(
      {
        data: data[0],
        pageNum: pageNum,
        pageSize: pageSize, 
        total: data[1][0]['count(*)']
      }
    )
  } catch(e) {
    ctx.body =  new ErrorModel(e)
  }
 
})

module.exports = router