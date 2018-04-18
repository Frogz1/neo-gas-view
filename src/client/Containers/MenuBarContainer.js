import { connect } from 'react-redux';
import MenuBar from '../Components/MenuBar';

const mapStateToProps = ({ currentPrice }) => {
  return {
    neoUsd: currentPrice.neoUsd,
    gasUsd: currentPrice.gasUsd,
    blockRate: currentPrice.blockRate,
  };
};

export default connect(mapStateToProps)(MenuBar);