import React from 'react';
import WalletContainer from '../Containers/WalletContainer';
import WelcomeContainer from '../Containers/WelcomeContainer';

const handleChangeView = (view) => {
  switch (view) {
    case 'calculator':
      return <WelcomeContainer />;
    case 'wallet':
      return <WalletContainer />;
    default:
      return <WelcomeContainer />;
  }
};


const PrimaryContent = ({ view }) => (
  <div>
    {
      handleChangeView(view)
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