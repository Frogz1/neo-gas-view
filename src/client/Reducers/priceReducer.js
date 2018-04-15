

export function currentPrice(state = {neoUsd: 0, gasUsd: 0}, action) {
  switch (action.type) {
    case 'SET_PRICE': 
      return Object.assign({}, state, {
        neoUsd: action.prices.neoUsd,
        gasUsd: action.prices.gasUsd
      })
    default: 
      return state
  };
};