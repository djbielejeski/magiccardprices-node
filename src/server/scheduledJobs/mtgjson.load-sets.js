const mtgJsonService = require('../services/mtgjson.version.service');

const jobs = module.exports;
const intervals = {};
intervals.second = 1000;
intervals.minute = intervals.second * 60;
intervals.hour = intervals.minute * 60;
intervals.day = intervals.hour * 24;

jobs.start = () => {

  console.log("Starting the version checker job...");

  setInterval(() => {
    const today = new Date();

    mtgJsonService.updateVersion().then((updated) => {
      if (updated) {
        // TODO: Update the sets
        console.log("Data updated");
      }
    });

    if (today.getHours() === 0) {
      // if it's in the 0 hour (aka near midnight)
      // your code here dave
    }
  }, intervals.second * 5); // Check periodically cause setTimeout is not very accurate
};
