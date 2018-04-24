import axios from 'axios';

const getBlockRate = (callback) => {
  axios
    .get('/v1/blocks/get_last_blockrate')
    .then(({ data }) => {
      const blockRate = {
        rate: data.last_twenty_block_avg,
        loaded: true,
      };
      callback(blockRate);
    })
    .catch((err) => {
      console.log(`Error getting last 20 blocks: ${err}`);
    });
};

export { getBlockRate };
