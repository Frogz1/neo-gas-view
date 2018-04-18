import React from 'react';
import WalletContainer from '../Containers/WalletContainer';
import Welcome from './Welcome';

const handleChangeView = (view) => {
  switch (view) {
    case 'calculator':
      return <Welcome />;
    case 'wallet':
      return <WalletContainer />;
    default:
      return <Welcome clicker={this.handleClickChangeView} />;
  }
};


const PrimaryContent = props => (
  <div>
    {
      handleChangeView(props.view)
    }
  </div>
);

export default PrimaryContent;
// switch (props.display) {
//   case 'calculator':
//     return <Welcome />;
//   case 'wallet':
//     return <WalletContainer />;
//   default:
//     return <Welcome clicker={this.handleClickChangeView} />;