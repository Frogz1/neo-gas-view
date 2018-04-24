import { connect } from 'react-redux';
import Wallet from '../Components/Wallet';
import { loadWallet, setWalletAddress } from '../Actions/walletAction';

const mapStateToProps = ({ wallet, currentPrice }) => ({
  wallet,
  gasUsd: currentPrice.gasUsd,
  neoUsd: currentPrice.neoUsd,
});

const mapDispatchToProps = dispatch => ({
  handleLoadWallet: address => dispatch(loadWallet(address)),
  updateAddress: address => dispatch(setWalletAddress(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
