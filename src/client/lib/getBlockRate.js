import axios from 'axios';

const getBlockRate = (callback) => {
  axios
    .get('/v1/blocks/get_last_blockrate')
    .then(({ data }) => {
      console.log(`block api broke setting to 20 sec temp ${data}`);
      const blockRate = {
        rate: 20,
        loaded: true,
      };
      callback(blockRate);
    })
    .catch((err) => {
      console.log(`Error getting last 20 blocks: ${err}`);
    });
};

export { getBlockRate };
