import { getWalletStats } from '../lib/getWalletStats';

const setWallet = ({ wallet }) => ({
  type: 'SET_WALLET',
  wallet,
});


const setWalletTitle = address => ({
  type: 'SET_WALLET_TITLE',
  address: address,
});

export function setWalletAddress(newAddress, error) {
  return {
    type: 'SET_WALLET_ADDRESS',
    newAddress: newAddress,
    error: error,
  };
}

export function loadWallet(address) {
  return (dispatch) => {
    dispatch(setWalletTitle(address))
    getWalletStats(address, (wallet) => {
      dispatch(setWallet({ wallet }));
    });
  };
}

