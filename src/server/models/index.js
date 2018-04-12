'use strict';
require('dotenv').config();
const Promise = require('bluebird');
const mongoClient = require('mongodb').MongoClient;
const axios = require('axios');

const url = 'mongodb://localhost:27017/neoGasViewer';


function getMongoConnection(url) {
  return mongoClient.connect(url, { promiseLibrary: Promise })
    .disposer(conn => conn.close())
}


const getWalletInfo = async () => {
  Promise.using(getMongoConnection(url), conn => {
    return axios
      .get(`/v1/wallet_history/${process.env.ADDRESS}`)
      .then(response => {
        conn
          .collection('wallet')
          .insertOne(response.data)
          .then((success) => {
            console.log(`successfully saved ${success}`);
          })
          .catch(error => console.log(error));
      })
  })
}

getWalletInfo();