import { connect } from 'react-redux';
import Wallet from '../Components/Wallet';
import loadWallet from '../Actions/walletAction';

const mapStateToProps = ({ wallet, currentPrice }) => ({
  wallet,
  gasUsd: currentPrice.gasUsd,
  neoUsd: currentPrice.neoUsd,
});

const mapDispatchToProps = dispatch => ({
  handleLoadWallet: () => dispatch(loadWallet()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
