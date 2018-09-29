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
        console.log(response.data)

        this.setState({
          wallet: {
            address: response.data.address,
            NEO: response.data.balance,
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
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
