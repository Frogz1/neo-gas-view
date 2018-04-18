import { connect } from 'react-redux';
import PrimaryContent from '../Components/PrimaryContent';

const mapStateToProps = ({ view }) => ({
  view: view.view,
});

export default connect(mapStateToProps)(PrimaryContent);
