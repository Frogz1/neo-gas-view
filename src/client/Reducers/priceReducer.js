

export function currentPrice(state = { neoUsd: 0, gasUsd: 0, loaded: false }, action) {
  switch (action.type) {
    case 'SET_PRICE':
      return Object.assign({}, state, {
        neoUsd: action.prices.neoUsd,
        gasUsd: action.prices.gasUsd,
      });
    case 'SET_BLOCK_RATE':
      return Object.assign({}, state, {
        blockRate: action.blockRate.rate,
        loaded: action.blockRate.loaded,
      });
    default:
      return state;
  }
}
