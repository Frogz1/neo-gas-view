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
      const { data } = response;
      const neo = data.balance.filter(n => n.asset === 'NEO')[0];
      const gas = data.balance.filter(n => n.asset === 'GAS')[0];
      console.log(`neo: ${neo} gas: ${gas}`);
      const wallet = {
        address: response.data.address,
        NEO: neo.amount,
        GAS: gas.amount,
        unspentNEO: reduceUnspent(neo.unspent),
        unclaimedGas: response.data.unclaimedGas,
        unspentGas: reduceUnspent(gas.unspent),
        loaded: true,
      };
      callback(wallet);
    })
    .catch((error) => {
      console.log(error);
    } );
};


export { getWalletStats };
