import React from 'react';
import { connect } from 'react-redux';
import PriceWidget from '../Components/PriceWidget.jsx'
import { loadPrices, loadBlockRate } from '../Actions/priceAction.js';

const mapStateToProps = ({ currentPrice }) => {
  return {
    neoUsd: currentPrice.neoUsd,
    gasUsd: currentPrice.gasUsd,
    blockRate: currentPrice.blockRate
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadPrices: () => dispatch(loadPrices()),
    handleLoadBlockRate: () => dispatch(loadBlockRate())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceWidget);