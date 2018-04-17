require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const axios = require('axios');
const serve = require('koa-static');
const morgan = require('koa-morgan')
const moment = require('moment');
const fs = require('fs');
const updateBlockRate = require('./models/index');

const PORT = process.env.PORT || 8080;
const ADDRESS = process.env.ADDRESS;

const publicFiles = serve('dist');

publicFiles._name = 'static /dist';

const app = new Koa();

const router = new Router();

app.use(morgan('dev'))

app.use(publicFiles);

router.get('/v1/wallet_history/:wallet', async (ctx, next) => {
  await axios
    .get(`https://neoscan.io/api/main_net/v1/get_address/${ctx.params.wallet}`)
    .then((response) => {
      ctx.response.body = response.data;
    })
    .catch(err => ctx.response.body = err);
});

router.get('/gas2', async (ctx, next) => {
  await axios
    .get(`https://api.neonwallet.com/v2/address/balance/${ADDRESS}`)
    .then((response) => {
      ctx.response.body = response.data;
    })
    .catch(err => ctx.response.body = err);
});
//Get Current wallet details, gas / neo count for wallet
router.get('/v1/wallet/:wallet', async (ctx, next) => {

  await axios
    .get(`https://api.neonwallet.com/v2/address/balance/${ctx.params.wallet}`)
    .then(async (response) => {
      let wallet = response.data;
      await axios.get(`http://api.neonwallet.com/v2/address/claims/${ctx.params.wallet}`)
        .then(({ data }) => {
          wallet.unclaimedGas = Number(data.total_unspent_claim) / 100000000
          ctx.response.body = wallet;
        })
        .catch(err => ctx.response.body = err)
    })
    .catch(err => ctx.response.body = err);
});

//Get Current USD value for NEO / GAS
router.get('/v1/current_price/', async (ctx, next) => {
  let prices = { neo: 0, gas: 0};
   await axios
      .get('https://api.coinmarketcap.com/v1/ticker/NEO/?convert=USD')
      .then(async (response) => {

        prices['neo'] = Number(Number(response.data[0].price_usd).toFixed(2));
        await axios
          .get('https://api.coinmarketcap.com/v1/ticker/GAS/?convert=USD')
          .then((response) => {
            prices['gas'] = Number(Number(response.data[0].price_usd).toFixed(2));
            ctx.response.body = prices;
          })
          .catch(error => console.log(error));
      })
      .catch(error => ctx.request.body = 'error caught');
});

//Get last 20 blocks
router.get('/v1/blocks/get_last_blockrate', async (ctx, next) => {
  await axios
    .get('https://neoscan.io/api/main_net/v1/get_last_blocks')
    .then(({ data }) => {
      ctx.response.body = {
        last_twenty_block_avg: Number(getAverageTime(data))
      }
    })
    .catch(err => ctx.response.body = 'error')
});

const getAverageTime = (blocks) => {

  let blockTimes = blocks.map(block => block.time);
  let blockTime = blockTimes.map((block, i, arr) => {
    return i < arr.length - 1 ? arr[i] - arr[i + 1] : 0
  })
  .reduce((a, b) => a + b);
  return (blockTime / (blockTimes.length - 1)).toFixed(2);
}


app.use(router.routes())

setInterval(() => updateBlockRate.updateBlockRate(), 30000)

app.listen(PORT, () => console.log(`listening on ${PORT}`));

