import React from 'react';
import PropTypes from 'prop-types';
import WalletContainer from '../Containers/WalletContainer';
import WelcomeContainer from '../Containers/WelcomeContainer';
import NeoInputContainer from '../Containers/NeoInputContainer';
import NeoInput from './NeoInput';


const handleChangeView = (view) => {
  switch (view) {
    case 'calculator':
      return <NeoInputContainer />;
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

PrimaryContent.propTypes = {
  view: PropTypes.string.isRequired,
};

export default PrimaryContent;
