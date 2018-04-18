import { connect } from 'react-redux';
import viewAction from '../Actions/viewAction';
import MenuBar from '../Components/MenuBar';

const mapStateToProps = ({ currentPrice }) => {
  return {
    neoUsd: currentPrice.neoUsd,
    gasUsd: currentPrice.gasUsd,
    blockRate: currentPrice.blockRate,
  };
};

const mapDispatchToProps = dispatch => ({
  setView: type => dispatch(viewAction(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);
