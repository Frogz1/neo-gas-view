import React from 'react';
import { connect } from 'react-redux';
import Wallet from '../Components/Wallet.jsx';
import loadWallet from '../Actions/walletAction';

const mapStateToProps = ({ wallet, currentPrice }) => {
  return {
    wallet,
    gasUsd: currentPrice.gasUsd,
    neoUsd: currentPrice.neoUsd,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadWallet: () => dispatch(loadWallet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
