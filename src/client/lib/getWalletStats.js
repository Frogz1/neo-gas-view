import axios from 'axios';

const reduceUnspent = unspent => (unspent.length
  ? unspent
    .map(a => a.value)
    .reduce((a, b) => a + b)
  : 0);

const getWalletStats = async (address, callback) => {
  if (address.length !== 34) {    
    callback(`Expected 34 characters but got: ${address.length}`);
    return `Expected 34 characters but got: ${address.length}`;
  }
  await axios
    .get(`/v1/wallet/${address}`)
    .then((response) => {
      const wallet = {
        address: response.data.address,
        NEO: response.data.NEO.balance,
        GAS: response.data.GAS.balance,
        unclaimedGas: response.data.unclaimedGas,
        unspentGas: reduceUnspent(response.data.GAS.unspent),
        unspentNEO: reduceUnspent(response.data.NEO.unspent),
        loaded: true,
      };
      callback(wallet);
    })
    .catch((error) => {
      console.log(error);
    } );
};


export { getWalletStats };
