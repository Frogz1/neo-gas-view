const getPriceUSD = (neoUsd, gasUsd) => ({
  type: 'GET_PRICE',
  neoUsd,
  gasUsd
});

export default getPriceUSD;