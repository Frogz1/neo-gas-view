import axios from 'axios';

const getCurrentPrice = async (callback) => {
  axios.get('/v1/current_price')
    .then((response) => {
      let prices = {
        neo_usd: response.data['neo'],
        gas_usd: response.data['gas'],
      }
      let neo_usd = response.data['neo'];
      let gas_usd = response.data['gas'];
      callback(neo_usd, gas_usd);
    })
    .catch(error => {
      console.log(`Error caught trying to retrieve latest price: ${error}`)
    });
};

export default getCurrentPrice;