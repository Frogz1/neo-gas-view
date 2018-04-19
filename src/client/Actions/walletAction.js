import { getWalletStats } from '../lib/getWalletStats';

const setWallet = ({ wallet }) => ({
  type: 'SET_WALLET',
  wallet,
});


export function setWalletAddress(newAddress) {
  return {
    type: 'SET_WALLET_ADDRESS',
    newAddress: newAddress,
  };
}

export function loadWallet(address) {
  return (dispatch) => {
    getWalletStats(address, (wallet) => {
      dispatch(setWallet({ wallet }));
    });
  };
}

