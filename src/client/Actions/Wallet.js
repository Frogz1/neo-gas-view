const walletInfo = (response) => {
  return {    
    type: 'UPDATE_WALLET',
    wallet: {
      address: response.data.address,
      NEO: response.data.NEO,
      GAS: response.data.GAS,
      unspentGas: response.data.GAS.unspent.length ? response.data.GAS.unspent.map(a => a.value).reduce((a,b) => a + b) : 0,
      unspentNEO: response.data.NEO.unspent.length ? response.data.NEO.unspent.map(a => a.value).reduce((a,b) => a + b) : 0,
    },
  }
};

export default walletInfo;