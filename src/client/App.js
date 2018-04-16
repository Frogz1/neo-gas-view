import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Container, Input, Button } from 'semantic-ui-react';
import Wallet from './Components/Wallet.jsx';
import PriceWidget from './Components/PriceWidget.jsx';
import PriceWidgetContainer from './Containers/PriceWidgetContainer';
import WalletContainer from './Containers/WalletContainer';


class App extends Component {


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


  render() {
    return (
      <div>

      <PriceWidgetContainer />
      <WalletContainer />

    <Container>
      {/* <Wallet wallet={this.state.wallet} gasPrice={this.state.gas_usd} neoPrice={this.state.neo_usd} />         */}
    </Container>
    <Container textAlign={'center'}>
      <Input size='medium' type="text" onChange={(e, data) => this.setState({ address: data.value})} />
      <Button onClick={() => this.handleAddressClick()}>See Details</Button>
    </Container>
    </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));