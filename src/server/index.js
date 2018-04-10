require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const axios = require('axios');
const serve = require('koa-static');
const morgan = require('koa-morgan')

const PORT = process.env.PORT || 8080;
const ADDRESS = process.env.ADDRESS;

const publicFiles = serve('dist');

publicFiles._name = 'static /dist';

const app = new Koa();

const router = new Router();

app.use(morgan('dev'))

app.use(publicFiles);

router.get('/gas1', async (ctx, next) => {
  await axios
    .get(`https://neoscan.io/api/main_net/v1/get_address/${ADDRESS}`)
    .then((response) => {
      ctx.response.body = response.data;
    })
    .catch(err => ctx.response.body = err);
})
router.get('/gas2', async (ctx, next) => {
  await axios
    .get(`https://api.neonwallet.com/v2/address/balance/${ADDRESS}`)
    .then((response) => {
      ctx.response.body = response.data;
    })
    .catch(err => ctx.response.body = err);
});

router.get('/v1/wallet/:wallet', async (ctx, next) => {
  await axios
    .get(`https://api.neonwallet.com/v2/address/balance/${ctx.params.wallet}`)
    .then((response) => {
      ctx.response.body = response.data;
    })
    .catch(err => ctx.response.body = err);
})

app.use(router.routes())



app.listen(PORT, () => console.log(`listening on ${PORT}`));

