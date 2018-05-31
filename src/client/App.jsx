import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MenuBarContainer from './Containers/MenuBarContainer';
import PrimaryContentContainer from './Containers/PrimaryContentContainer';
import { store } from './store/store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAddress: '',
    };
    // this.handleClickChangeView = this.handleClickChangeView.bind(this);
  }

  handleAddressClick() {
    axios.get(`/v1/wallet/${this.state.address}`)
      .then((response) => {
        const wallet = Object.assign({}, this.state.wallet);

        this.setState({
          wallet: {
            address: response.data.address,
            NEO: response.data.NEO,
            GAS: response.data.GAS,
            unspentGas: response.data.GAS.unspent.map(a => a.value).reduce((a, b) => a + b),
            unspentNEO: response.data.NEO.unspent.map(a => a.value).reduce((a, b) => a + b),
          },
        });
      });
  }


  render() {
    return (
      <div>
        <MenuBarContainer />
        <PrimaryContentContainer />
        {/* <Container style={{ margin: '10px' }} textAlign="center">
          <Input style={{ width: '315px', marginRight: '5px' }} size="small" type="text" value={store.getState().wallet.newAddress} onChange={(e, data) =>  {
            console.log(data.value)
            store.dispatch(setWalletAddress(data.value)) }} />
          <Button
            size="medium"
            onClick={() => {
          store.dispatch(loadWallet(store.getState().wallet.newAddress));
         
        }}
          >
          Check Address
          </Button>
          <footer>Donations welcome :)</footer>
        </Container> */}
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
