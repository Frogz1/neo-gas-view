import axios from 'axios';

const getCurrentPrice = async (callback) => {
  axios.get('/v1/current_price')
    .then((response) => {
      const prices = {
        neoUsd: response.data.neo,
        gasUsd: response.data.gas,
        loaded: true,
      };
      callback(prices);
    })
    .catch((error) => {
      console.log(`Error caught trying to retrieve latest price: ${error}`);
    });
};

export { getCurrentPrice };
