import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { currentPrice } from '../Reducers/priceReducer';
import { wallet }  from '../Reducers/walletReducer'
import { loadWallet } from '../Actions/walletAction';
import { loadPrices, loadBlockRate } from '../Actions/priceAction';

var combined = combineReducers({wallet, currentPrice});
const store = createStore(
  combined, composeWithDevTools(applyMiddleware(thunk))); 



  const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
store.dispatch(loadWallet(store.getState().wallet.address));
store.dispatch(loadPrices())
store.dispatch(loadBlockRate());
console.log(store.getState());

// store.dispatch('LOAD_WALLET_SUCCESS')

unsubscribe();

export { store };