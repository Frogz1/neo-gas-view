import axios from 'axios';

const getWalletStats = async (address, callback) => {
  axios
    .get(`/v1/wallet/${address}`)
    .then(response => {
      let wallet ={ 
          address: response.data.address,
          NEO: response.data.NEO,
          GAS: response.data.GAS,
          unspentGas: response.data.GAS.unspent.length ? response.data.GAS.unspent.map(a => a.value).reduce((a,b) => a + b) : 0,
          unspentNEO: response.data.NEO.unspent.length ? response.data.NEO.unspent.map(a => a.value).reduce((a,b) => a + b) : 0,
        };
        callback(wallet);      
    })
    .catch(error => {
      console.log(error);
    }
  )       
};

export default getWalletStats;