import axios from 'axios';

const getWalletStats = async (address, callback) => {
  axios
    .get(`/v1/wallet/${address}`)
    .then(response => {
      let wallet ={ 
          address: response.data.address,
          NEO: response.data.NEO.balance,
          GAS: response.data.GAS.balance,
          unclaimedGas: response.data.unclaimedGas,
          unspentGas: reduceUnspent(response.data.GAS.unspent),
          unspentNEO: reduceUnspent(response.data.NEO.unspent),
        };
        callback(wallet);      
    })
    .catch(error => {
      console.log(error);
    }
  )
};

const reduceUnspent = (unspent) => {
return unspent.length
  ? unspent
    .map(a => a.value)
    .reduce((a, b) => a + b)
  : 0;  
}

export { getWalletStats };