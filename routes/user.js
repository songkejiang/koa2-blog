const router = require('koa-router')()
router.prefix('/api/user')

router.post('/login', async (ctx, next) => {
  let {
    username,
    password
  } = ctx.request.body
  ctx.body = {
    errono: 0,
    username,
    password
  }
})
// router.get('/session-test', async (ctx, next) => {
  
// })


module.exports = router