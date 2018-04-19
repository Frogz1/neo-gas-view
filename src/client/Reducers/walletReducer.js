
const initialState = {
  address: 'APd8oRCpwKDD8YbzuUJPg2h7VRwp6bWZUk',
  NEO: '',
  GAS: '',
  unspentGas: [],
  unspentNEO: [],
};

export function wallet(state = initialState , action) {
  switch (action.type) {
    case 'SET_WALLET':
      return Object.assign({}, state, {
        newAddress: "",
        address: action.wallet.address,
        NEO: action.wallet.NEO,
        GAS: action.wallet.GAS,
        unclaimedGas: action.wallet.unclaimedGas,
        unspentGas: action.wallet.unspentGas,
        unspentNEO: action.wallet.unspentNEO
      })
    case 'SET_WALLET_ADDRESS':
     return Object.assign({}, state, {
       newAddress: action.newAddress
      })
    default:
      return state;
  }
}