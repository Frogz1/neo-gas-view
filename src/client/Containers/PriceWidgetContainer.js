
import { connect } from 'react-redux';
import PriceWidget from '../Components/PriceWidget';
import { loadPrices, loadBlockRate } from '../Actions/priceAction';

const mapStateToProps = ({ currentPrice }) => ({
  neoUsd: currentPrice.neoUsd,
  gasUsd: currentPrice.gasUsd,
  blockRate: currentPrice.blockRate,
});

const mapDispatchToProps = dispatch => ({
  handleLoadPrices: () => dispatch(loadPrices()),
  handleLoadBlockRate: () => dispatch(loadBlockRate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceWidget);
