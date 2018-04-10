import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Container, Input, Button } from 'semantic-ui-react';
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

  handleAddressClick() {
    axios.get(`/v1/wallet/${this.state.address}`)
      .then(response => {
        let wallet = Object.assign({}, this.state.wallet);
        
        this.setState({
          wallet: {
            address: response.data.address,
            NEO: response.data.NEO,
            GAS: response.data.GAS,
            unspentGas: response.data.GAS.unspent.map(a => a.value).reduce((a,b) => a + b),
            unspentNEO: response.data.NEO.unspent.map(a => a.value).reduce((a,b) => a + b),
          }
        });
      })
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
            unspentGas: response.data.GAS.unspent.map(a => a.value).reduce((a,b) => a + b),
            unspentNEO: response.data.NEO.unspent.map(a => a.value).reduce((a,b) => a + b),
          }
        });
      })
  }

  componentDidMount() {
    // this.populateAddress();
  }

  render() {
    return (
    <Container>
      <div>
      <Input type="text" onChange={(e, data) => this.setState({ address: data.value})} />
      <Button onClick={() => this.handleAddressClick()}>See Details</Button>
      <Wallet wallet={this.state.wallet} />        
      </div>
    </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));