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

// sse (WIP)
const sse = require('koa-sse-stream');

router
  .get('/', (ctx, next) => {
    // won't be hit coz only requests prefixed with /apis are proxyed to the apis app
    ctx.body = 'Hello Default...';
  })
  .get('/apis/:query', (ctx, next) => {
    console.log(ctx.params);

    const log = {};
    if (ctx.header) { log['header'] = ctx.header; }
    if (ctx.href) { log['href'] = ctx.href; }
    app.logs.insert(log, {w: 1}, (err, records) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Added records: ', records);
      }
    });

    // respond to clients
    const resp = {status: 1, msg: 'resp from koa', query: ctx.params.query};
    if (ctx.params.query == 'tbl_data') {
      resp['data'] = [
        { id: 1, name: 'Alan', age: 39, email: 'alan@email.com' },
        { id: 2, name: 'Allen', age: 19, email: 'allen@email.com' },
        { id: 3, name: 'Cindy', age: 16, email: 'cindy@email.com' },
        { id: 4, name: 'Mary', age: 26, email: 'mary@email.com' },
        { id: 3, name: 'John', age: 33, email: 'john@email.com' },
        { id: 4, name: 'Tim', age: 42, email: 'tim@email.com' }
      ];
    }
    ctx.body = resp;
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