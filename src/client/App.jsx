import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { Container, Icon } from 'semantic-ui-react';
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
        <Container textAlign="center" style={{ marginTop: '50px' }}>
          <div>
            <a href="http://www.github.com/Frogz1" aria-label="github profile for developer">
              <Icon size="large" color="black" name="github" />
            </a>
            <a href="http://www.twitter.com/redharp_" aria-label="twitter profile for developer">
              <Icon name="twitter" color="black" size="large" />
            </a>
          </div>
          <footer style={{ color: 'grey', fontSize: '11px' }}>
           AXMgaAN8eKi3TezBbcvH79RhNXTqzCVgjx<br />
           Donations Accepted :)
          </footer>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
