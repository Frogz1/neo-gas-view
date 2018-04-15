import { getCurrentPrice } from '../lib/getCurrentPrice';

const setPriceUSD = (prices) => ({
  type: 'SET_PRICE',
  prices
});



export function loadPrices() {
  return (dispatch) => {
    getCurrentPrice((prices) => {
      console.log(prices)
      dispatch(setPriceUSD(prices));
    });
  };
};

