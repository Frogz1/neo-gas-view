import { connect } from 'react-redux';
import { setNeoQuantity } from '../Actions/walletAction';
import NeoInput from '../Components/NeoInput';

const mapStateToProps = ({ wallet }) => ({
  wallet,
});

const mapDispatchToProps = dispatch => ({
  updateNeoQuantity: quantity => dispatch(setNeoQuantity(quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NeoInput);
