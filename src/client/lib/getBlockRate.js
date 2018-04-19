import axios from 'axios';

const getBlockRate = (callback) => {

  axios
  .get(`/v1/blocks/get_last_blockrate`)
  .then(({ data }) => {
    let blockRate = data.last_twenty_block_avg;
    callback(blockRate)      
  })
  .catch(err => {
    console.log(`Error getting last 20 blocks: ${err}`)
  });
};

export { getBlockRate };