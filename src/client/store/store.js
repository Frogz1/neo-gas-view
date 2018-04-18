import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { currentPrice } from '../Reducers/priceReducer';
import { wallet } from '../Reducers/walletReducer';
import { loadWallet } from '../Actions/walletAction';
import { loadPrices, loadBlockRate } from '../Actions/priceAction';

const combined = combineReducers({ wallet, currentPrice });
const store = createStore(combined, composeWithDevTools(applyMiddleware(thunk)));


const unsubscribe = store.subscribe(() =>
  console.log(store.getState()));
store.dispatch(loadWallet(store.getState().wallet.address));
store.dispatch(loadPrices());
store.dispatch(loadBlockRate());


// store.dispatch('LOAD_WALLET_SUCCESS')

unsubscribe();

export { store };
