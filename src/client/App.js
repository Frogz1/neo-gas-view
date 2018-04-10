import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import Wallet from './Components/Wallet.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wallet: {
        address: '',
        NEO: '',
        GAS: '',
        unspentGas: [],
        unspentNeo: [],
      }
    };
  }

  populateAddress() {
    axios.get('/gas2')
      .then(response => {
        let wallet = Object.assign({}, this.state.wallet);
        
        this.setState({
          wallet: {
            address: response.data.address,
            NEO: response.data.NEO,
            GAS: response.data.GAS,
            unspentGas: response.data.GAS.unspent,
            unspentNEO: response.data.NEO.unspent,
          }
        });
      })
  }

  componentDidMount() {
    this.populateAddress();
  }

  render() {
    return (
    <Container>
      <div>
        <h3>Neo to Gas baby</h3>
        <Wallet wallet={this.state.wallet} />
      </div>
    </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));