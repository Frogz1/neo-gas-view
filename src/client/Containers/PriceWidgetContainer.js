import React from 'react';
import { connect } from 'react-redux';
import PriceWidget from '../Components/PriceWidget.jsx'
import loadPrices from '../Actions/priceAction.js';

const mapStateToProps = ({ currentPrice }) => {
  return {
    neoUsd: currentPrice.neoUsd,
    gasUsd: currentPrice.gasUsd
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadPrices: () => dispatch(loadPrices())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceWidget);