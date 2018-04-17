import { getCurrentPrice } from '../lib/getCurrentPrice';
import { getBlockRate } from '../lib/getBlockRate';

const setPriceUSD = (prices) => ({
  type: 'SET_PRICE',
  prices
});

const setBlockRate = (blockRate) => ({
  type: 'SET_BLOCK_RATE',
  blockRate
})

export function loadBlockRate() {
  return (dispatch) => {
    getBlockRate((blockRate) => {
      dispatch(setBlockRate(blockRate));
    });
  };
};

export function loadPrices() {
  return (dispatch) => {
    getCurrentPrice((prices) => {
      console.log(prices)
      dispatch(setPriceUSD(prices));
    });
  };
};

