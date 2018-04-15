import axios from 'axios';

const getCurrentPrice = async (callback) => {
  axios.get('/v1/current_price')
    .then((response) => {
      console.log('hi')
      let prices = {
        neoUsd: response.data['neo'],
        gasUsd: response.data['gas'],
      }
      let neo_usd = response.data['neo'];
      let gas_usd = response.data['gas'];
      callback(prices);
    })
    .catch(error => {
      console.log(`Error caught trying to retrieve latest price: ${error}`)
    });
};

export { getCurrentPrice };