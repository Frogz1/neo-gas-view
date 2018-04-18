import { connect } from 'react-redux';
import viewAction from '../Actions/viewAction';
import Welcome from '../Components/Welcome';

const mapDispatchToProps = dispatch => ({
  setView: type => dispatch(viewAction(type)),
});

export default connect(null, mapDispatchToProps)(Welcome);
