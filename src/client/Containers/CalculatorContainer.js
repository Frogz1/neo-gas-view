import { connect } from 'react-redux';
import Calculator from '../Components/Calculator';

const mapStateToProps = ({ currentPrice, wallet }) => ({
  gasPrice: currentPrice.gasUsd,
  blockRate: currentPrice.blockRate,
  neoCount: wallet.NEO,
});

export default connect(mapStateToProps)(Calculator);
