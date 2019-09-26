/*const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username + 'you suck 2' }));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
*/

global._ = require('lodash');
global.Promise = require('bluebird');

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config/config');
const routes = require('./config/routes');
const jobs = require('./scheduledJobs/mtgjson.load-sets');

mongoose.Promise = global.Promise;


const app = express();
const server = Promise.promisifyAll(http.Server(app));

// Setup our html
app.use(express.static('dist'));

// Setup our routes.
routes.http(app);

function connectToMongoose() {
  return new Promise((resolve, reject) => {
    const url = 'mongodb://' + config.db.host + ':' + config.db.port + '/' + config.db.name;
    mongoose.connect(url);
    mongoose.connection.once('open', (err) => {
      if (err) {
        return reject(err);
      }

      console.log('mongoose ' + url);
      resolve();
    });
  });
}

module.exports.run = function (cb) {
  console.log('server - Starting');

  connectToMongoose()
    .then(() => {

      // Turn on the schedule jobs.
      jobs.start();

      return server.listenAsync(8080, () => console.log(`Listening on port ${8080}!`));
    })
    .then(() => {
      console.log('Server running on port 8080');
    })
    .then(cb)
    .catch((error) => console.error('server - Error while starting', error));
};

module.exports.run();
