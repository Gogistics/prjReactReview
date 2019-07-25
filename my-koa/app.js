const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello Default...';
  })
  .get('/apis/', (ctx, next) => {
    ctx.body = 'apis...';
  });

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);