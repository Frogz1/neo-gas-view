import React from 'react';
import { connect } from 'react-redux';
import PriceWidget from './../components/PriceWidget';
import loadPrices from '../actions/priceAction.js';

const mapStateToProps = ({ currentPrice }) => {
  return {
    neoUsd: currentPrice.neoUsd,
    gasUSd: currentPrice.gasUSd
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadPrices: () => dispatch(loadPrices())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceWidget);