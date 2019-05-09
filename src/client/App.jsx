import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MenuBarContainer from './Containers/MenuBarContainer';
import PrimaryContentContainer from './Containers/PrimaryContentContainer';
import { store } from './store/store';
import { reduceSum } from '../utils/utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddressClick() {
    axios.get(`/v1/wallet/${this.state.address}`)
      .then((response) => {
        Object.assign({}, this.state.wallet);

        this.setState({
          wallet: {
            address: response.data.address,
            NEO: response.data.balance,
            GAS: response.data.GAS,
            unspentGas: reduceSum(response.data.GAS),
            unspentNEO: reduceSum(response.data.NEO),
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

// eslint-disable-next-line no-undef
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
