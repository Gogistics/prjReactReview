const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();

// router
const router = new Router();

// mongo setup
require("./mongodb")(app);

// redis
const Redis = require("ioredis");
const redis = new Redis({
  port: 6379,
  host: "179.99.0.6",
  db: 0
});

// test
redis.set("foo", "bar");
redis.get("foo", function(err, result) {
  console.log(result);
});
// \redis

// session & redis
const session = require('koa-generic-session');
const redisStore = require('koa-redis');

// sse
const sse = require('koa-sse-stream');

router
  .get('/', (ctx, next) => {
    // won't be hit coz only requests prefixed with /apis are proxyed to the apis app
    ctx.body = 'Hello Default...';
  })
  .get('/apis/:query', (ctx, next) => {
    console.log(ctx.params);
    ctx.body = {status: 1, msg: 'resp from koa', query: ctx.params.query};
  });

app.use(session({
    store: redisStore({
      host: '179.99.0.6',
      port: 6379,
      db: 0
    })
  }))
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8000);