import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Container, Input, Button, Sidebar, Menu, Icon, Segment } from 'semantic-ui-react';
import Wallet from './Components/Wallet';
import GasWidget from './Components/GasWidget';
import PriceWidget from './Components/PriceWidget';
import MenuBar from './Components/MenuBar';
import Welcome from './Components/Welcome';
import PriceWidgetContainer from './Containers/PriceWidgetContainer';
import WalletContainer from './Containers/WalletContainer';
import MenuBarContainer from './Containers/MenuBarContainer';
import { loadWallet } from './Actions/walletAction';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAddress: '',
      display: 'welcome',
    };
    this.handleClickChangeView = this.handleClickChangeView.bind(this);
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

  handleClickChangeView(e, data) {
    console.log(e);
    console.log(data);
    this.setState({
      display: data.children.toLowerCase(),
    })
  }

  handleChangeView() {
    switch (this.state.display) {
      case 'calculator':
        return <Welcome />;
      case 'wallet':
        return <WalletContainer />;
      default:
        return <Welcome clicker={this.handleClickChangeView} />;
    }
  }

  render() {
    return (
      <div>
        <MenuBarContainer />
        {
          this.handleChangeView()
        }
        {/* <PriceWidgetContainer /> */}
        {/* <GasWidget /> */}
        <Container>
          {/* <WalletContainer /> */}
        </Container>
        <Container style={{ margin: '10px' }} textAlign="center">
          <Input style={{ width: '315px', marginRight: '5px' }} size="small" type="text" children={<input value={this.state.newAddress} />} onChange={(e, data) => this.setState({ newAddress: data.value })} />

          <Button
            size="medium"
            onClick={() => {
          store.dispatch(loadWallet(this.state.newAddress));
          this.setState({
            newAddress: '',
          });
        }}
          >
          Check Address
          </Button>
          <footer>Donations welcome :)</footer>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
