import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { store } from './store/store';
import MenuBarContainer from './Containers/MenuBarContainer';
import PrimaryContentContainer from './Containers/PrimaryContentContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <div>
        <MenuBarContainer />
        <PrimaryContentContainer />
        <Container textAlign="center" style={{ color: 'grey', marginTop: '50px' }}>
          <footer>
            Donations welcome AXMgaAN8eKi3TezBbcvH79RhNXTqzCVgjx
          </footer>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
