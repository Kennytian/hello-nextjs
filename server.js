const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const consola = require('consola');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/a', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
    ctx.respond = false;
  });

  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query);
    ctx.respond = false;
  });

  router.all('*', async ctx => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  server.use(router.routes());

  server.listen(port, () => {
    consola.ready({
      message: `Server listening on http://localhost:${port}`,
      badge: true,
    });
  });
});
