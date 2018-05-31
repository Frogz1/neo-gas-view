
require('dotenv').config();

const mongoose = require('mongoose');
const axios = require('axios');


mongoose.connect('mongodb://localhost/test').then(() =>
  console.log('SUCCESS:'))
  .catch(error => console.log(`ERRRROR: ${error}`));

const Blockrate = mongoose.model('Blockrate', {
  block_rate: Number,
  calculatedAt: Date,
});

const updateBlockRate = () => {
  axios
    .get('http://localhost:8001/v1/blocks/get_last_blockrate')
    .then(({ data }) => {
      const blockrate = new Blockrate({
        block_rate: data.last_twenty_block_avg,
        calculatedAt: new Date().toUTCString(),
      });
      blockrate
        .save()
        .then((value) => {
          console.log(`Success: ${value}`);
        })
        .catch((err) => {
          console.log(`ouch, got an error: \n ${err}`);
          mongoose.disconnect();
          process.exit(); 
});
    }).catch((err) => {
      console.log(err);
      process.exit();
    });
};


module.exports = { updateBlockRate };
