import { connect } from 'react-redux';
import viewAction from '../Actions/viewAction';
import { loadWallet, setWalletAddress  } from '../Actions/walletAction';
import Welcome from '../Components/Welcome';

const mapStateToProps = ({ wallet }) => ({
  wallet,
});

const mapDispatchToProps = dispatch => ({
  setView: type => dispatch(viewAction(type)),
  updateAddress: address => dispatch(setWalletAddress(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
