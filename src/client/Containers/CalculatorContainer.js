import { connect } from 'react-redux';
import Calculator from '../Components/Calculator';

const mapStateToProps = ({ currentPrice }) => ({
  gasPrice: currentPrice.gasUsd,
  blockRate: currentPrice.blockRate,
});

export default connect(mapStateToProps)(Calculator);
