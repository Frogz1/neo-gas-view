import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { wallet } from '../Reducers/walletReducer'
import { loadWallet } from '../Actions/actionCreators';

const store = createStore(
  wallet, composeWithDevTools(applyMiddleware(thunk))); 



  const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(loadWallet(store.getState().address));

// store.dispatch('LOAD_WALLET_SUCCESS')

unsubscribe();

export { store };