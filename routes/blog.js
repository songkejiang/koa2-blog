const router = require('koa-router')()

router.prefix('/api/blog')

router.get('/list', async (ctx, next) => {
  ctx.body = 'koa2 string'
})
router.get('/sessiontest', async (ctx, next) => {
  if (!ctx.session.contView) {
    ctx.session.contView = 0
  }
  ctx.session.contView++
  console.log(ctx.session.contView)
  ctx.body = {
    contView: '222'
  }
})
module.exports = router