import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { store } from './store/store'
import { Container, Input, Button } from 'semantic-ui-react';
import Wallet from './Components/Wallet.jsx';
import PriceWidget from './Components/PriceWidget.jsx';
import { letProto } from 'rxjs/operator/let';


class App extends Component {
  constructor() {
    super();
    this.state = {
      address: 'APd8oRCpwKDD8YbzuUJPg2h7VRwp6bWZUk',
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
    axios.get(`/v1/wallet/${this.state.address}`)
    .then(response => {
      let wallet = Object.assign({}, this.state.wallet);
      
      this.setState({
        wallet: {
          address: response.data.address,
          NEO: response.data.NEO,
          GAS: response.data.GAS,
          unspentGas: response.data.GAS.unspent.map(a => a.value).reduce((a,b) => a + b),
          unspentNEO: response.data.NEO.unspent.length > 0 ? response.data.NEO.unspent.map(a => a.value).reduce((a,b) => a + b) : null
        }
      });
    })
  }
  getCurrentPrices() {
    axios.get('/v1/current_price')
      .then((response) => {
        const trevor = Number(le)
        let neo_usd = response.data['neo'];
        let gas_usd = response.data['gas'];
        this.setState({
          neo_usd,
          gas_usd
        });
      })
      .catch(error => console.log(`caught ${error} trying to get current usd value`));
  }

  buildTenWidgets() {
    let counter = 0;
    let result = [];
    while (counter < 10) {
      result.push(<PriceWidget neoPrice={this.state.neo_usd} gasPrice={this.state.gas_usd} />)
      counter++;
    }
    return result;
  }

  componentDidMount() {
    this.getCurrentPrices();
    this.populateAddress();
  }

  render() {
    return (
      <div>

      <PriceWidget neoPrice={this.state.neo_usd} gasPrice={this.state.gas_usd} />

    <Container>
      <Wallet wallet={this.state.wallet} gasPrice={this.state.gas_usd} neoPrice={this.state.neo_usd} />        
    </Container>
    <Container textAlign={'center'}>
      <Input size='medium' type="text" onChange={(e, data) => this.setState({ address: data.value})} />
      <Button onClick={() => this.handleAddressClick()}>See Details</Button>
    </Container>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));