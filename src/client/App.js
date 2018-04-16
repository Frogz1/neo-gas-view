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
import { loadWallet } from './Actions/walletAction';


class App extends Component { 
  state = {
    newAddress: ''
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


  render() {
    return (
      <div>
      <PriceWidgetContainer />
        <Container>
          <WalletContainer />
        </Container>
      <Container textAlign={'center'}>
        <Input style={{width: '315px'}} size='small' type="text" children={<input value={this.state.newAddress} />}  onChange={(e, data) => this.setState({ newAddress: data.value})} />
      {/* <Input size='medium' type="text" fluid value={store.getState().wallet.newAddress} onChange={(e, data) => store.dispatch({type: 'SET_WALLET_ADDRESS',wallet: data.value})}/> */}
        <Button  size='medium' onClick={() => {
          store.dispatch(loadWallet(this.state.newAddress));
          this.setState({
            newAddress: ''
          })
        }}>
          See Details
        </Button>
     </Container>
    </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));