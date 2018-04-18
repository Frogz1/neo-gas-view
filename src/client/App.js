import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Container, Input, Button, Sidebar, Menu, Icon, Segment } from 'semantic-ui-react';
import Wallet from './Components/Wallet.jsx';
import GasWidget from './Components/GasWidget.jsx'
import PriceWidget from './Components/PriceWidget.jsx';
import MenuBar from './Components/MenuBar.jsx';
import PriceWidgetContainer from './Containers/PriceWidgetContainer';
import WalletContainer from './Containers/WalletContainer';
import { loadWallet } from './Actions/walletAction';
import { setSeconds } from 'date-fns';


class App extends Component { 
  state = {
    newAddress: '',
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
      <MenuBar />

      <PriceWidgetContainer />
      <GasWidget />
        <Container>
          <WalletContainer />
        </Container>
      <Container style={{margin: '10px'}} textAlign={'center'}>
        <Input style={{width: '315px', marginRight: '5px'}} size='small' type="text" children={<input value={this.state.newAddress} />}  onChange={(e, data) => this.setState({ newAddress: data.value})} />

        <Button  size='medium' onClick={() => {
          store.dispatch(loadWallet(this.state.newAddress));
          this.setState({
            newAddress: ''
          })
        }}>
          Check Address
        </Button>
     </Container>
    </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
