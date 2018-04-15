
const initialState = {
  address: 'APd8oRCpwKDD8YbzuUJPg2h7VRwp6bWZUk',
  wallet: {
    address: '',
    NEO: '',
    GAS: '',
    unspentGas: [],
    unspentNeo: [],
  },
};

export function wallet(state = initialState , action) {
  switch (action.type) {
    case 'SET_WALLET':
      return Object.assign({}, state, {
        wallet: action.wallet
      })
    case 'LOAD_WALLET_REQUEST':
     return Object.assign({}, state, {
       address: action.address
      })
    default:
      return state;
  }
}