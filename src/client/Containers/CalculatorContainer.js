import { connect } from 'react-redux';
import Calculator from '../Components/Calculator';

const mapStateToProps = ({ currentPrice, wallet }) => ({
  gasPrice: currentPrice.gasUsd,
  blockRate: currentPrice.blockRate,
  neoCount: wallet.NEO,
  loaded: currentPrice.loaded,
});

export default connect(mapStateToProps)(Calculator);
