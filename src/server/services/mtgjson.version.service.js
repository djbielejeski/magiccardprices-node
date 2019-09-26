const https = require('https');
const mongoService = require('./base.mongo.service');
const versionModel = require('../models/mtgjson/mtgjson.version');

const service = module.exports;

service.getStoredVersion = () => {
  return new Promise((resolve, reject) => {

    versionModel.find((error, versions) => {
      if (error) {
        return reject(error);
      }

      return versions && versions.length && versions.length > 0 ?
              resolve(versions[0]) :
              resolve(null);
    });
  });
}

service.getVersionFromMTGJson = () => {
  return new Promise((resolve, reject) => {
      https.get('https://www.mtgjson.com/json/version.json', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
          data += chunk;
        });

        resp.on('end', () => {
          const updatedVersion = JSON.parse(data);
          return resolve(updatedVersion);
        });
      })
      .on("error", (err) => {
        reject("Error: " + err.message);
      });
  });
}

service.updateVersion = () => {
  return new Promise((resolve, reject) => {
    this.getStoredVersion().then(databaseVersion => {
      this.getVersionFromMTGJson().then((updatedVersion) => {
        if (!databaseVersion || databaseVersion.version != updatedVersion.version) {
          databaseVersion = { ...updatedVersion };

          mongoService.addOrUpdateSingle(versionModel, databaseVersion).then((item) => {
            return resolve(true);
          });
        }
        else {
          return resolve(false);
        }
      });
    });
  });
}


