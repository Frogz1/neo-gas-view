import { getWalletStats } from '../lib/getWalletStats';

const setWallet = ({ wallet }) => ({
  type: 'SET_WALLET',
  wallet,
});


const setWalletAddress = ({address}) => ({
  type: 'SET_WALLET_ADDRESS',
  address,
})


function loadWallet(address) {
  return (dispatch) => {
    getWalletStats(address, (wallet) => {
      dispatch(setWallet({wallet}))
    });
  };
}

export { loadWallet };
