const koa = require('koa');
const app = new koa();
const router = require('koa-router');
const koaBody = require('koa-body');
const path = require('path');
const serve = require('koa-static');

const PORT = process.env.PORT || 8080;

const publicFiles = serve(path.join(__dirname + '../../dist'));

publicFiles._name = 'static /dist';


app.use(serve('dist'))


app.listen(PORT, () => `listening on ${PORT}`);

